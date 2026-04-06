import https from 'https';

const url = 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg';

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers['content-type']);
}).on('error', (e) => {
  console.error(e);
});
