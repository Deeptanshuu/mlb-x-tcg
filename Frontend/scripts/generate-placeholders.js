const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const players = [
  {
    name: 'ohtani',
    color: '#1e88e5' // Dodgers blue
  },
  {
    name: 'acuna',
    color: '#ce1141' // Braves red
  },
  {
    name: 'soto',
    color: '#003087' // Yankees blue
  }
];

async function generatePlaceholder(player) {
  // Create canvas
  const canvas = createCanvas(400, 560);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = player.color;
  ctx.fillRect(0, 0, 400, 560);

  // Gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, 0, 560);
  gradient.addColorStop(0, 'rgba(0,0,0,0.3)');
  gradient.addColorStop(0.5, 'rgba(0,0,0,0.1)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.6)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 400, 560);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/cards/${player.name}.jpg`, buffer);
}

async function generateAll() {
  for (const player of players) {
    await generatePlaceholder(player);
  }
}

generateAll().catch(console.error); 