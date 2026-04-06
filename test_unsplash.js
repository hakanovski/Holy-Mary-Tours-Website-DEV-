import https from 'https';

const url = 'https://images.unsplash.com/photo-1541450805268-4822a3a774ca?auto=format&fit=crop&w=1200&q=80';

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
}).on('error', (e) => {
  console.error(e);
});
