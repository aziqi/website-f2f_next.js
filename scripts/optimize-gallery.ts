import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import convert from "heic-convert";

const inputDir = path.resolve("bahan/gallery");
const outputDir = path.resolve("public/assets/gallery");

async function run() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir).filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return [".jpg", ".jpeg", ".heic", ".png"].includes(ext);
  });

  console.log(`Processing ${files.length} images from ${inputDir}...`);

  interface GalleryOptimizedResult {
    id: number;
    originalFile: string;
    optimizedFile: string;
    width?: number;
    height?: number;
    originalKB: string;
    optimizedKB: string;
    savings: string;
  }

  const results: GalleryOptimizedResult[] = [];
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();
    const outputFileName = `gallery-${String(i + 1).padStart(2, "0")}.webp`;
    const outputPath = path.join(outputDir, outputFileName);

    const originalStats = fs.statSync(inputPath);
    totalOriginal += originalStats.size;

    let inputBuffer: Buffer;
    if (ext === ".heic") {
      console.log(`Converting HEIC to JPEG buffer: ${file}...`);
      const rawBuffer = fs.readFileSync(inputPath);
      const converted = await convert({
        buffer: rawBuffer,
        format: "JPEG",
        quality: 0.95,
      });
      inputBuffer = Buffer.from(converted);
    } else {
      inputBuffer = fs.readFileSync(inputPath);
    }

    const image = sharp(inputBuffer);
    const processed = await image
      .rotate()
      .resize({
        width: 1600,
        height: 1600,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 85,
        effort: 6,
      })
      .toFile(outputPath);

    const optimizedSize = processed.size;
    totalOptimized += optimizedSize;

    const ratio = (((originalStats.size - optimizedSize) / originalStats.size) * 100).toFixed(1);

    results.push({
      id: i + 1,
      originalFile: file,
      optimizedFile: outputFileName,
      width: processed.width,
      height: processed.height,
      originalKB: (originalStats.size / 1024).toFixed(1),
      optimizedKB: (optimizedSize / 1024).toFixed(1),
      savings: `${ratio}%`,
    });

    console.log(
      `✓ [${i + 1}/${files.length}] ${file} -> ${outputFileName} | ${(originalStats.size / 1024 / 1024).toFixed(2)}MB -> ${(optimizedSize / 1024).toFixed(1)}KB (-${ratio}%)`
    );
  }

  console.log("\n==========================================");
  console.log(`Total Original : ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Optimized: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Savings  : ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%`);
  console.log("==========================================\n");

  // Output JSON metadata for src/data/gallery.ts
  fs.writeFileSync(
    path.resolve("scripts/gallery-metadata.json"),
    JSON.stringify(results, null, 2),
    "utf-8"
  );
  console.log("Saved metadata to scripts/gallery-metadata.json");
}

run().catch((err) => {
  console.error("Optimization failed:", err);
  process.exit(1);
});
