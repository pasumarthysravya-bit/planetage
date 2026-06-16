import fs from 'fs';
import https from 'https';
import path from 'path';

const textures = [
  { name: 'mercury.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_mercury.jpg' },
  { name: 'venus.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg' },
  { name: 'earth.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg' },
  { name: 'mars.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_mars.jpg' },
  { name: 'jupiter.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg' },
  { name: 'saturn.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_saturn.jpg' },
  { name: 'saturn_ring.png', url: 'https://www.solarsystemscope.com/textures/download/2k_saturn_ring_alpha.png' },
  { name: 'uranus.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_uranus.jpg' },
  { name: 'neptune.jpg', url: 'https://www.solarsystemscope.com/textures/download/2k_neptune.jpg' }
];

const destFolder = path.resolve('public', 'textures');

if (!fs.existsSync(destFolder)) {
  fs.mkdirSync(destFolder, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading high-res textures...');
  for (const tex of textures) {
    const dest = path.join(destFolder, tex.name);
    if (!fs.existsSync(dest)) {
      console.log(`Downloading ${tex.name}...`);
      try {
        await download(tex.url, dest);
        console.log(`Saved ${tex.name}`);
      } catch (e) {
        console.error(`Error downloading ${tex.name}: ${e.message}`);
      }
    } else {
      console.log(`${tex.name} already exists. Skipping.`);
    }
  }
  console.log('All textures downloaded!');
}

run();
