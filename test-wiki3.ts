const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/c/cb/Ephesos_amphitheatre.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ad/Celsus_Library%2C_Ephesus.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c2/Celsus_K%C3%BCt%C3%BCphanesi%2C_2019_09.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/52/20180113_EphesusRuin_6756_%2840145623491%29.jpg'
];

async function test() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(`${res.status} - ${url}`);
    } catch (e) {
      console.log(`Error - ${url}`);
    }
  }
}
test();
