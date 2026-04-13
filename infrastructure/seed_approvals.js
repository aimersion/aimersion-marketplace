// seed_approvals.js
// Reads content_calendar log OR approval-queue.jsonl, parses, writes to Supabase
const fs = require('fs');
const https = require('https');
const os = require('os');

const SB_URL = process.env.SUPABASE_URL || 'https://zdhwkctdqxkhnyrmovua.supabase.co';
const SB_KEY = process.env.SUPABASE_SERVICE_KEY;
if (!SB_KEY) { console.error('SUPABASE_SERVICE_KEY not set — run: source ~/.zprofile'); process.exit(1); }

const logDir = os.homedir() + '/aimersion-logs';

// ============================================================
// STRATEGY 1: Read from approval-queue.jsonl (orchestrator output)
// ============================================================
function readFromJsonl() {
  const queueFile = logDir + '/zizo-approval-queue.jsonl';
  if (!fs.existsSync(queueFile)) return [];
  const lines = fs.readFileSync(queueFile, 'utf8').trim().split('\n').filter(Boolean);
  const pieces = [];
  for (const line of lines) {
    try {
      const entry = JSON.parse(line);
      if (entry.content_type && entry.content_data) {
        pieces.push({
          type: entry.content_type,
          title: entry.content_data.title || entry.content_type,
          body: entry.content_data.body || entry.content_data.content || '',
          day: entry.content_data.day || '',
          funnel_stage: entry.content_data.funnel_stage || 'tofu',
          pillar: entry.content_data.pillar || '',
        });
      }
    } catch(e) {}
  }
  return pieces;
}

// ============================================================
// STRATEGY 2: Parse the full content_calendar .txt log
// ============================================================
function readFromLog() {
  const logFiles = fs.readdirSync(logDir)
    .filter(f => f.includes('content_calendar') && f.endsWith('.txt'))
    .sort().reverse();
  if (!logFiles.length) return [];
  
  const logPath = logDir + '/' + logFiles[0];
  console.log('Reading log:', logPath);
  const text = fs.readFileSync(logPath, 'utf8')
    .replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  console.log('Size:', text.length, 'chars');
  const headings = text.split('\n').filter(l => /^#{1,3} /.test(l));
  console.log('Headings:', headings.map(h => h.substring(0,60)));
  
  const pieces = [];
  const chunks = text.split(/\n(?=## [0-9]+\.)/);
  
  for (const chunk of chunks) {
    const header = chunk.split('\n')[0].trim();
    if (/^## 1\./i.test(header) || /LINKEDIN POSTS/i.test(header)) {
      const dayParts = chunk.split(/\n(?=### )/);
      for (const part of dayParts) {
        const h = part.split('\n')[0].trim();
        if (!h.startsWith('###')) continue;
        const title = h.replace(/^###\s*/, '').trim();
        if (!/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/i.test(title)) continue;
        const body = part.split('\n').slice(1)
          .filter(l => !l.match(/^\*\*Funnel|^\*\*Pillar|^---+$/i))
          .join('\n').trim();
        if (body.length < 80) continue;
        const day = (title.match(/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/i)||[''])[0].toUpperCase();
        pieces.push({ type:'linkedin_post', title, body:body.substring(0,4000), day, funnel_stage:{FRIDAY:'bofu',THURSDAY:'mofu'}[day]||'tofu', pillar:'' });
      }
    } else if (/^## 2\./i.test(header)) {
      const tm = chunk.match(/\*\*Title:\*\*\s*([^\n]+)/i);
      pieces.push({ type:'blog_post', title:tm?tm[1].trim():'Blog post', body:chunk.substring(0,8000).trim(), day:'Tuesday', funnel_stage:'mofu', pillar:'' });
    } else if (/^## 3\./i.test(header)) {
      const sm = chunk.match(/\*\*Subject line:\*\*\s*([^\n]+)/i);
      pieces.push({ type:'email', title:sm?'Email: '+sm[1].trim():'Thursday email', body:chunk.substring(0,5000).trim(), day:'Thursday', funnel_stage:'mofu', pillar:'' });
    } else if (/^## 4\./i.test(header)) {
      pieces.push({ type:'ad_copy', title:'LinkedIn Ad Copy — 2 variants', body:chunk.substring(0,4000).trim(), day:'Ongoing', funnel_stage:'mofu', pillar:'' });
    } else if (/^## 5\./i.test(header)) {
      const tm = chunk.match(/\*\*Title:\*\*\s*["\'\u201c]?([^"\'\u201d\n]+)/i);
      pieces.push({ type:'video_script', title:tm?'Video: '+tm[1].trim():'60-second video script', body:chunk.substring(0,4000).trim(), day:'Flexible', funnel_stage:'tofu', pillar:'' });
    }
  }
  return pieces;
}

// ============================================================
// MAIN
// ============================================================
let pieces = readFromJsonl();
console.log('From JSONL queue:', pieces.length, 'pieces');

if (pieces.length === 0) {
  pieces = readFromLog();
  console.log('From log file:', pieces.length, 'pieces');
}

if (pieces.length === 0) {
  console.log('\n⚠️  No pieces found in either source.');
  console.log('Run: node ~/Documents/aimersion/orchestrator.js --client zizo --job content_calendar');
  process.exit(0);
}

console.log('\nPieces to write:');
pieces.forEach(p => console.log('  ' + p.type + ': ' + p.title.substring(0,55)));

function sbReq(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(SB_URL + path);
    const data = body ? JSON.stringify(body) : null;
    const headers = { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY };
    if (data) { headers['Content-Type'] = 'application/json'; headers['Prefer'] = 'return=minimal'; }
    const req = https.request({ hostname:url.hostname, path:url.pathname+url.search, method, headers },
      res => { let d=''; res.on('data',c=>d+=c); res.on('end',()=>resolve({status:res.statusCode,body:d})); });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

(async () => {
  await sbReq('DELETE', '/rest/v1/approval_queue?status=eq.pending', null);
  console.log('\n✓ Cleared pending queue');
  const cr = await sbReq('GET', '/rest/v1/clients?slug=eq.zizo&select=id', null);
  const clientId = JSON.parse(cr.body)[0]?.id;
  if (!clientId) { console.error('Client zizo not found'); process.exit(1); }
  console.log('✓ Client:', clientId);
  let ok = 0;
  for (const p of pieces) {
    const res = await sbReq('POST', '/rest/v1/approval_queue', {
      client_id: clientId,
      content_type: p.type,
      content_data: { title:p.title, body:p.body, day:p.day, funnel_stage:p.funnel_stage, pillar:p.pillar },
      status: 'pending',
    });
    if (res.status < 300) { ok++; console.log('  ✓ '+p.type+': '+p.title.substring(0,50)); }
    else console.log('  ✗ '+p.type+': HTTP '+res.status+' — '+res.body.substring(0,100));
  }
  console.log('\n✅ ' + ok + '/' + pieces.length + ' pieces written to Supabase');
  if (ok > 0) console.log('   → marketingpro-wine.vercel.app/approvals');
})().catch(console.error);
