const https = require('https');

const urls = [
  'https://images.unsplash.com/photo-1596423735880-5f2a689b903e?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589828156163-7186103604d3?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=2940&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5f1?q=80&w=2942&auto=format&fit=crop',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ephesus_Celsus_Library_Facade.jpg/1920px-Ephesus_Celsus_Library_Facade.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ephesus_Grand_Theater.jpg/1920px-Ephesus_Grand_Theater.jpg'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(`${res.statusCode} - ${url}`);
  }).on('error', (e) => {
    console.error(e);
  });
});
