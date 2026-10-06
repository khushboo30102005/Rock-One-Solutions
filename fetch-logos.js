const https = require('https');
const http = require('http');

async function getLogo(url) {
  return new Promise((resolve) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/<img[^>]+src=['"]([^'"]+)['"][^>]*>/gi)];
        
        let possibleLogos = matches.map(m => m[1]).filter(s => s.toLowerCase().includes('logo') || s.toLowerCase().includes('cropped') || s.toLowerCase().includes('site-logo'));
        console.log(url, '=>\n  ', possibleLogos.join('\n  '));
        resolve(possibleLogos);
      });
    }).on('error', err => {
      console.log(url, 'Error:', err.message);
      resolve(null);
    });
  });
}

(async () => {
  await getLogo('https://meeautoparts.com');
  await getLogo('https://ssp-virid.vercel.app');
  await getLogo('https://meecarrentals.com');
  await getLogo('https://fermefoods.com');
  await getLogo('https://americanfreighthub.com');
})();
