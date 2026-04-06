const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const replacements = {
  "https://upload.wikimedia.org/wikipedia/commons/a/ad/Celsus_Library%2C_Ephesus.jpg": "https://images.unsplash.com/photo-1584132915807-31ff36c2f281?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/d/d8/Blue_Mosque_Courtyard_Dusk.jpg": "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/2/22/Interior_of_Hagia_Sophia_in_Istanbul.jpg": "https://images.unsplash.com/photo-1541432901042-227abcbf614a?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Sardis_Gymnasium_2007.jpg": "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/d/d3/Pamukkale_00.JPG": "https://images.unsplash.com/photo-1524231757712-24ef10a92789?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/7/72/House_of_the_Virgin_Mary_in_Ephesus.jpg": "https://images.unsplash.com/photo-1548625361222-780838181617?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hagia_Sophia_Deesis_mosaic.jpg": "https://images.unsplash.com/photo-1541432901042-227abcbf614a?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Antakya_St_Peter_church_8284.jpg": "https://images.unsplash.com/photo-1548625361222-780838181617?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/7/7b/Tarsus_St_Paul_Well_0332.jpg": "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/c/c5/Aspendos_Theater.jpg": "https://images.unsplash.com/photo-1584132915807-31ff36c2f281?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Laodicea_on_the_Lycus_-_Syrian_Street.jpg": "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/0/05/Pergamon_Theater.jpg": "https://images.unsplash.com/photo-1584132915807-31ff36c2f281?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/6/61/Trojan_Horse_replica_in_Troy.jpg": "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/c/c8/Hagia_Sophia_Mars_2013.jpg": "https://images.unsplash.com/photo-1541432901042-227abcbf614a?auto=format&fit=crop&w=1280&q=80",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ephesos_amphitheatre.jpg": "https://images.unsplash.com/photo-1584132915807-31ff36c2f281?auto=format&fit=crop&w=1280&q=80"
};

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
  content = content.split(oldUrl).join(newUrl);
}

fs.writeFileSync('src/App.tsx', content);
console.log('Done replacing URLs');
