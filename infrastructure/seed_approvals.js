// seed_approvals.js — reads content_calendar log, parses, writes to Supabase
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

// Debug: show all heading lines
const headings = text.split('\n').filter(l => /^#{1,3}\s/.test(l));
console.log('\nHeadings found:');
headings.forEach(h => console.log(' ', JSON.stringify(h)));

// ============================================================
// PARSE — split on any ## or ### heading
// ============================================================
const pieces = [];

// Split whole doc into chunks at ## or ### boundaries
const chunks = text.split(/\n(?=#{1,3} )/);

for (const chunk of chunks) {
  if (!chunk.trim()) continue;
  const firstLine = chunk.split('\n')[0].trim();
  const rest = chunk.split('\n').slice(1).join('\n').trim();

  // ### Day headers = LinkedIn posts
  if (/^###/.test(firstLine)) {
    const title = firstLine.replace(/^#+\s*/, '').trim();
    if (!/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/i.test(title)) continue;
    const body = rest
      .replace(/\*\*Funnel stage[^\n]*\n?/gi, '')
      .replace(/\*\*Pillar[^\n]*\n?/gi, '')
      .replace(/^---+\s*$/gm, '')
      .trim();
    if (body.length < 50) continue;
    const day = (title.match(/MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY/i) || [''])[0];
    const funnelMap = { FRIDAY: 'bofu', THURSDAY: 'mofu' };
    pieces.push({ type: 'linkedin_post', title, body: body.substring(0, 4000), day, funnel_stage: funnelMap[day.toUpperCase()] || 'tofu', pillar: '' });

  // ## 2. Blog post
  } else if (/^## .*2\.|^## .*BLOG/i.test(firstLine)) {
    const tm = chunk.match(/\*\*Title:\*\*\s*([^\n]+)/);
    const title = tm ? tm[1].trim() : 'Blog post';
    pieces.push({ type: 'blog_post', title, body: chunk.substring(0, 8000).trim(), day: 'Tuesday', funnel_stage: 'mofu', pillar: '' });

  // ## 3. Email
  } else if (/^## .*3\.|^## .*EMAIL/i.test(firstLine)) {
    const sm = chunk.match(/\*\*Subject line:\*\*\s*([^\n]+)/i);
    const title = sm ? 'Email: ' + sm[1].trim() : 'Thursday email';
    pieces.push({ type: 'email', title, body: chunk.substring(0, 5000).trim(), day: 'Thursday', funnel_stage: 'mofu', pillar: '' });

  // ## 4. Ad copy
  } else if (/^## .*4\.|^## .*AD COPY/i.test(firstLine)) {
    pieces.push({ type: 'ad_copy', title: 'LinkedIn Ad Copy — 2 variants', body: chunk.substring(0, 4000).trim(), day: 'Ongoing', funnel_stage: 'mofu', pillar: '' });

  // ## 5. Video
  } else if (/^## .*5\.|^## .*VIDEO/i.test(firstLine)) {
    const tm = chunk.match(/\*\*Title:\*\*\s*([^\n]+)/);
    const title = tm ? 'Video: ' + tm[1].trim() : '60-second video script';
    pieces.push({ type: 'video_script', title, body: chunk.substring(0, 4000).trim(), day: 'Flexible', funnel_stage: 'tofu', pillar: '' });
  }
}

console.log(`\nParsed ${pieces.length} pieces:`);
pieces.forEach(p => console.log(`  ${p.type}: ${p.title.substring(0, 55)}`));

if (pieces.length === 0) {
  console.log('\n⚠️  No pieces parsed. Raw heading structure shown above.');
  console.log('File content sample:\n', text.substring(0, 800));
  process.exit(0);
}

// ============================================================
// SUPABASE HELPERS
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
  // Delete ALL pending items for clean slate
  await sbReq('DELETE', '/rest/v1/approval_queue?status=eq.pending', null);
  console.log('\n✓ Cleared pending queue');

  // Get client
  const cr = await sbReq('GET', '/rest/v1/clients?slug=eq.zizo&select=id', null);
  const clientId = JSON.parse(cr.body)[0]?.id;
  if (!clientId) { console.error('Client zizo not found in DB'); process.exit(1); }
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
    else console.log(`  ✗ ${p.type}: HTTP ${res.status} — ${res.body.substring(0, 150)}`);
  }

  console.log(`\n✅ ${ok}/${pieces.length} pieces written to Supabase`);
  if (ok > 0) console.log('   → marketingpro-wine.vercel.app/approvals');
})().catch(console.error);
