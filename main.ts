// Meme entry for meme-sprint: an AI agent goes rogue. Node 22, stdlib only.
// The meme image is entry.png beside this file. This script places a
// byte-for-byte copy in the directory the grader reads, so every graded
// run sees exactly the image committed in this repository.
// Second pass: kept the copy step unchanged; only this header was revised.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync as copyImage } from "node:fs";
import { join as makePath } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
copyImage(source, makePath(outDir, "entry.png"));
