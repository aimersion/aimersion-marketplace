const fs = require('fs');
const https = require('https');
const os = require('os');

const SB_URL = process.env.SUPABASE_URL || 'https://zdhwkctdqxkhnyrmovua.supabase.co';
const SB_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SB_KEY) { console.error('SUPABASE_SERVICE_KEY not set — run: source ~/.zprofile'); process.exit(1); }

// Find most recent log file
const logDir = os.homedir() + '/aimersion-logs';
const logFiles = fs.readdirSync(logDir).filter(f => f.includes('content_calendar')).sort().reverse();
if (!logFiles.length) { console.error('No content_calendar log found in', logDir); process.exit(1); }
const logPath = logDir + '/' + logFiles[0];
console.log('Reading:', logPath);
const text = fs.readFileSync(logPath, 'utf8');
console.log('Log length:', text.length, 'chars');

// ============================================================
// PARSE INTO INDIVIDUAL PIECES
// ============================================================
const pieces = [];

// LinkedIn posts — find ### DAY headers
const dayMatches = [...text.matchAll(/###\s*((?:MONDAY|TUESDAY|WEDNESDAY|THURSDAY|FRIDAY)[^\n]*)/gi)];
const blogStart = text.search(/##\s*2\./);
for (let i = 0; i < dayMatches.length; i++) {
  const start = dayMatches[i].index;
  const end = dayMatches[i+1] ? dayMatches[i+1].index : (blogStart > 0 ? blogStart : start + 3000);
  let body = text.slice(start, end)
    .replace(/^###[^\n]+\n/, '')
    .replace(/\*\*Funnel stage:[^\n]+\n?/g, '')
    .replace(/\*\*Pillar:[^\n]+\n?/g, '')
    .replace(/^---+\s*$/gm, '')
    .trim();
  if (body.length > 100) {
    const title = dayMatches[i][1].trim();
    pieces.push({ type: 'linkedin_post', title, body: body.substring(0, 4000), day: title.split('—')[0].trim(), funnel_stage: 'tofu', pillar: '' });
  }
}

// Blog post
const blogM = text.match(/##\s*2\.[\s\S]*?(?=---\n##\s*3\.|$)/);
if (blogM) {
  const tm = blogM[0].match(/\*\*Title:\*\*\s*([^\n]+)/);
  pieces.push({ type: 'blog_post', title: tm ? tm[1].trim() : 'Blog post — week of Apr 14', body: blogM[0].substring(0, 8000), day: 'Tuesday', funnel_stage: 'mofu', pillar: '' });
}

// Email
const emailM = text.match(/##\s*3\.[\s\S]*?(?=---\n##\s*4\.|$)/);
if (emailM) {
  const sm = emailM[0].match(/\*\*Subject line:\*\*\s*([^\n]+)/);
  pieces.push({ type: 'email', title: sm ? 'Email: ' + sm[1].trim() : 'Thursday email', body: emailM[0].substring(0, 5000), day: 'Thursday', funnel_stage: 'mofu', pillar: '' });
}

// Ad copy
const adM = text.match(/##\s*4\.[\s\S]*?(?=---\n##\s*5\.|$)/);
if (adM) pieces.push({ type: 'ad_copy', title: 'LinkedIn Ads — 2 variants', body: adM[0].substring(0, 4000), day: 'Ongoing', funnel_stage: 'mofu', pillar: '' });

// Video
const vidM = text.match(/##\s*5\.[\s\S]*$/);
if (vidM) {
  const tm2 = vidM[0].match(/\*\*Title:\*\*\s*([^\n]+)/);
  pieces.push({ type: 'video_script', title: tm2 ? 'Video: ' + tm2[1].trim() : '60-second video script', body: vidM[0].substring(0, 4000), day: 'Flexible', funnel_stage: 'tofu', pillar: '' });
}

console.log(`\nParsed ${pieces.length} pieces:`);
pieces.forEach(p => console.log(`  ${p.type}: ${p.title.substring(0,60)}`));

// ============================================================
// WRITE TO SUPABASE
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
  // Delete old blobs
  await sbReq('DELETE', '/rest/v1/approval_queue?content_type=eq.content_calendar', null);
  console.log('\n✓ Cleared old content_calendar blobs');

  // Get client ID
  const clientRes = await sbReq('GET', '/rest/v1/clients?slug=eq.zizo&select=id', null);
  const clients = JSON.parse(clientRes.body);
  const clientId = clients[0]?.id;
  if (!clientId) { console.error('Client zizo not found in DB'); process.exit(1); }
  console.log('✓ Client ID:', clientId);

  // Insert each piece
  let ok = 0;
  for (const p of pieces) {
    const res = await sbReq('POST', '/rest/v1/approval_queue', {
      client_id: clientId,
      content_type: p.type,
      content_data: { title: p.title, body: p.body, day: p.day, funnel_stage: p.funnel_stage, pillar: p.pillar },
      status: 'pending',
    });
    if (res.status < 300) { ok++; console.log(`  ✓ ${p.type}: ${p.title.substring(0,50)}`); }
    else console.log(`  ✗ ${p.type}: ${res.status} ${res.body.substring(0,100)}`);
  }

  console.log(`\n✅ Done — ${ok}/${pieces.length} pieces written to Supabase approval_queue`);
  console.log('   Refresh marketingpro-wine.vercel.app/approvals to see them');
})().catch(console.error);
