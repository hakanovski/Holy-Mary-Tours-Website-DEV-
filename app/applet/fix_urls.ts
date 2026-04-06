import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/([a-f0-9]\/[a-f0-9]{2}\/[^\/]+)\/[^\/"]+/g, 'https://upload.wikimedia.org/wikipedia/commons/$1');

fs.writeFileSync('src/App.tsx', content);
console.log('URLs fixed!');
