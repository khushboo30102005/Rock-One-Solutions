const https = require('https');
const http = require('http');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const urls = [
    'https://meeautoparts.com/',
    'https://ssp-virid.vercel.app/',
    'https://meecarrentals.com/'
  ];
  
  for (const url of urls) {
    try {
      const html = await fetchHtml(url);
      console.log(`\n--- ${url} ---`);
      // Find logo links (src="...logo...png|svg")
      const matches = html.match(/src=[\"\'][^\"\']*logo[^\"\']*[\"\']/gi);
      if (matches) {
        matches.forEach(m => console.log(m));
      } else {
        // Just find any images
        const imgs = html.match(/<img[^>]+src=[\"\'][^\"\']+[\"\'][^>]*>/gi);
        if (imgs) {
          console.log("Images found (first 5):");
          imgs.slice(0, 5).forEach(img => console.log(img));
        } else {
            console.log("No images found.");
        }
      }
    } catch (e) {
      console.error(`Error fetching ${url}:`, e.message);
    }
  }
}
run();
