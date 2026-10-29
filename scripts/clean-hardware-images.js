const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processImage(inputName, outputName) {
  const inputPath = path.join(__dirname, '..', 'public', 'assets', inputName);
  const outputPath = path.join(__dirname, '..', 'public', 'assets', outputName);

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    return;
  }

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isWhite(idx, threshold = 238) {
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    return r >= threshold && g >= threshold && b >= threshold;
  }

  // Seed with outer perimeter
  for (let x = 0; x < width; x++) {
    // top
    const idxTop = (0 * width + x) * channels;
    if (isWhite(idxTop)) {
      visited[0 * width + x] = 1;
      queue.push(x, 0);
    }
    // bottom
    const idxBottom = ((height - 1) * width + x) * channels;
    if (isWhite(idxBottom)) {
      visited[(height - 1) * width + x] = 1;
      queue.push(x, height - 1);
    }
  }

  for (let y = 0; y < height; y++) {
    // left
    const idxLeft = (y * width + 0) * channels;
    if (isWhite(idxLeft) && !visited[y * width + 0]) {
      visited[y * width + 0] = 1;
      queue.push(0, y);
    }
    // right
    const idxRight = (y * width + (width - 1)) * channels;
    if (isWhite(idxRight) && !visited[y * width + (width - 1)]) {
      visited[y * width + (width - 1)] = 1;
      queue.push(width - 1, y);
    }
  }

  // BFS Flood Fill
  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];
    const idx = (y * width + x) * channels;

    // Set fully transparent
    data[idx + 3] = 0;

    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nPos = ny * width + nx;
        if (!visited[nPos]) {
          const nIdx = nPos * channels;
          if (isWhite(nIdx, 235)) {
            visited[nPos] = 1;
            queue.push(nx, ny);
          }
        }
      }
    }
  }

  // Soft edge anti-aliasing pass for slight fringe
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const pos = y * width + x;
      const idx = pos * channels;
      if (data[idx + 3] > 0) {
        // check if neighbor is transparent
        const hasTransparentNeighbor =
          data[((y - 1) * width + x) * channels + 3] === 0 ||
          data[((y + 1) * width + x) * channels + 3] === 0 ||
          data[(y * width + (x - 1)) * channels + 3] === 0 ||
          data[(y * width + (x + 1)) * channels + 3] === 0;

        if (hasTransparentNeighbor) {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          // If very light gray near boundary, soften alpha
          if (r > 220 && g > 220 && b > 220) {
            const brightness = (r + g + b) / 3;
            // map 220..255 to alpha
            const alpha = Math.max(0, Math.min(255, Math.round((255 - brightness) * 4)));
            data[idx + 3] = alpha;
          }
        }
      }
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png()
    .toFile(outputPath);

  console.log(`Successfully created ${outputName} (${width}x${height})`);
}

async function main() {
  await processImage('sensor-node.png', 'sensor-node-clean.png');
  await processImage('gateway.png', 'gateway-clean.png');
}

main().catch(console.error);
