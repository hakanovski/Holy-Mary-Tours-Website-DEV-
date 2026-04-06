const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const seeds = [
  "ephesus", "istanbul", "anatolia", "church", "history", "ancient", "ruins", "mosque", "turkey", "biblical", "paul", "mary", "hagiasophia", "pamukkale", "smyrna"
];

let seedIndex = 0;

content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&w=(\d+)&q=80/g, (match, width) => {
  const seed = seeds[seedIndex % seeds.length];
  seedIndex++;
  return `https://picsum.photos/seed/${seed}/${width}/1080`;
});

fs.writeFileSync('src/App.tsx', content);
console.log('Replaced Unsplash URLs with Picsum placeholders.');
