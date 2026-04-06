import https from 'https';

const url = 'https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?auto=format&fit=crop&w=1280&q=80';

https.get(url, (res) => {
  console.log('Status:', res.statusCode);
});
