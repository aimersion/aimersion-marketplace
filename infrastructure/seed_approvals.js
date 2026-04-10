const fs = require('fs');
const https = require('https');
const os = require('os');

const SB_URL = process.env.SUPABASE_URL || 'https://zdhwkctdqxkhnyrmovua.supabase.co';
const SB_KEY = process.env.SUPABASE_SERVICE_KEY;
if (!SB_KEY) { console.error('SUPABASE_SERVICE_KEY not set — run: source ~/.zprofile'); process.exit(1); }

// Find most recent content_calendar log
const logDir = os.homedir() + '/aimersion-logs';
const logFiles = fs.readdirSync(logDir)
  .filter(f => f.includes('content_calendar') && f.endsWith('.txt'))
  .sort().reverse();
if (!logFiles.length) { console.error('No content_calendar log in', logDir); process.exit(1); }

const logPath = logDir + '/' + logFiles[0];
console.log('Reading:', logPath);
const raw = fs.readFileSync(logPath, 'utf8');
const text = raw.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
console.log('Size:', text.length, 'chars');

// Show all headers to understand structure
const allHeaders = text.split('\n').filter(l => /^#{1,3}\s/.test(l));
console.log('\nAll headers found:');
allHeaders.forEach(h => console.log(' ', h.substring(0, 80)));

// ============================================================
// SMART PARSER — splits on ### headers, classifies each block
// ============================================================
const pieces = [];

// Split entire text on ### boundaries
const blocks = text.split(/\n(?=###\s)/);

for (const block of blocks) {
  const lines = block.trim().split('\n');
  const header = lines[0];
  if (!header.startsWith('###')) continue;

  const title = header.replace(/^###\s*/, '').trim();
  const body = lines.slice(1).join('\n').trim();
  if (body.length < 50) continue;

  // Classify by title keywords
  let type = 'linkedin_post';
  let day = '';
  let funnel = 'tofu';

  const tl = title.toLowerCase();

  if (/blog|article|seo|2[,\s]?000\s*word/i.test(tl)) {
    type = 'blog_post'; day = 'Tuesday';
  } else if (/email|subject:/i.test(tl) || /\*\*subject/i.test(body.substring(0, 200))) {
    type = 'email'; day = 'Thursday'; funnel = 'mofu';
  } else if (/ad\s+(variant|copy|creative)|variant\s+[ab]/i.test(tl)) {
    type = 'ad_copy'; day = 'Ongoing'; funnel = 'mofu';
  } else if (/video\s+script|60[-\s]sec|script:/i.test(tl)) {
    type = 'video_script'; day = 'Flexible';
  } else if (/linkedin/i.test(tl)) {
    type = 'linkedin_post';
    // Infer day from order (first 5 linkedin posts = Mon-Fri)
    const liCount = pieces.filter(p => p.type === 'linkedin_post').length;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    day = days[liCount] || 'Weekday';
    funnel = liCount >= 3 ? 'mofu' : 'tofu';
    if (liCount === 4) funnel = 'bofu';
  }

  pieces.push({ type, title, body: body.substring(0, 6000), day, funnel_stage: funnel, pillar: '' });
  console.log(`  -> ${type}: ${title.substring(0, 60)}`);
}

// If ### didn't work, try ## blocks
if (pieces.length === 0) {
  console.log('\nNo ### blocks found, trying ## blocks...');
  const blocks2 = text.split(/\n(?=##\s)/);
  for (const block of blocks2) {
    const lines = block.trim().split('\n');
    const header = lines[0];
    if (!header.startsWith('##')) continue;
    const title = header.replace(/^##\s*/, '').trim();
    const body = lines.slice(1).join('\n').trim();
    if (body.length < 50) continue;

    const tl = title.toLowerCase();
    let type = 'linkedin_post', day = '', funnel = 'tofu';
    if (/blog/i.test(tl)) { type = 'blog_post'; day = 'Tuesday'; }
    else if (/email/i.test(tl)) { type = 'email'; day = 'Thursday'; funnel = 'mofu'; }
    else if (/ad/i.test(tl)) { type = 'ad_copy'; day = 'Ongoing'; funnel = 'mofu'; }
    else if (/video/i.test(tl)) { type = 'video_script'; day = 'Flexible'; }
    else {
      const liCount = pieces.filter(p => p.type === 'linkedin_post').length;
      day = ['Monday','Tuesday','Wednesday','Thursday','Friday'][liCount] || 'Weekday';
      funnel = liCount >= 3 ? 'mofu' : 'tofu';
    }
    pieces.push({ type, title, body: body.substring(0, 6000), day, funnel_stage: funnel, pillar: '' });
    console.log(`  -> ${type}: ${title.substring(0, 60)}`);
  }
}

// Last resort: whole file as one item
if (pieces.length === 0) {
  console.log('\nFallback: inserting full output as single item');
  pieces.push({
    type: 'content_calendar_raw',
    title: 'Content Calendar — ' + logFiles[0].replace('zizo-content_calendar-','').replace('.txt',''),
    body: text.substring(0, 8000),
    day: 'Week', funnel_stage: 'mixed', pillar: '',
  });
}

console.log(`\nTotal: ${pieces.length} pieces ready to insert`);

// ============================================================
// SUPABASE WRITE
// ============================================================
function sbReq(method, path, body) {
  return new Promise((resolve, reject) => {
    const url = new URL(SB_URL + path);
    const data = body ? JSON.stringify(body) : null;
    const headers = { 'apikey': SB_KEY, 'Authorization': 'Bearer ' + SB_KEY };
    if (data) { headers['Content-Type'] = 'application/json'; headers['Prefer'] = 'return=minimal'; }
    const req = https.request({ hostname: url.hostname, path: url.pathname + url.search, method, headers },
      res => { let d = ''; res.on('data', c => d += c); res.on('end', () => resolve({ status: res.statusCode, body: d })); });
    req.on('error', reject);
    if (data) req.write(data);
    req.end();
  });
}

(async () => {
  // Clear old blobs
  await sbReq('DELETE', '/rest/v1/approval_queue?content_type=eq.content_calendar', null);
  await sbReq('DELETE', '/rest/v1/approval_queue?content_type=eq.content_calendar_raw', null);
  console.log('\n✓ Cleared old blobs');

  // Get client ID
  const cr = await sbReq('GET', '/rest/v1/clients?slug=eq.zizo&select=id', null);
  const clientId = JSON.parse(cr.body)[0]?.id;
  if (!clientId) { console.error('Client zizo not found'); process.exit(1); }
  console.log('✓ Client ID:', clientId);

  let ok = 0;
  for (const p of pieces) {
    const res = await sbReq('POST', '/rest/v1/approval_queue', {
      client_id: clientId,
      content_type: p.type,
      content_data: { title: p.title, body: p.body, day: p.day, funnel_stage: p.funnel_stage, pillar: p.pillar },
      status: 'pending',
    });
    if (res.status < 300) { ok++; console.log(`  ✓ ${p.type}: ${p.title.substring(0, 50)}`); }
    else console.log(`  ✗ HTTP ${res.status}: ${res.body.substring(0, 150)}`);
  }

  console.log(`\n✅ ${ok}/${pieces.length} pieces written to Supabase`);
  if (ok > 0) console.log('   Refresh marketingpro-wine.vercel.app/approvals');
})().catch(console.error);
