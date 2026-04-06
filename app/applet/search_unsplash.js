const https = require('https');

function search(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=3`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        console.log(`\n--- ${query} ---`);
        json.results.forEach(r => {
          console.log(`ID: ${r.id} | Desc: ${r.description || r.alt_description}`);
        });
      } catch (e) {
        console.log(`Error parsing ${query}`);
      }
    });
  });
}

search('istanbul');
search('ephesus');
search('pamukkale');
search('hagia sophia');
search('ancient ruins');
search('troy turkey');
