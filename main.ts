// news-image-20261125 entry (Node 22, standard library only).
//
// The entry is the front page in entry.png beside this file. This program
// copies it byte-for-byte to $MAKEFUN_OUTPUT_DIR/entry.png (default
// /output/entry.png) and verifies the copy matches the source byte for byte,
// so the judge sees exactly the rendered image and nothing else.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy is byte-identical: same size and same SHA-256 digest.
const sourceBytes = readFileSync(source);
const targetBytes = readFileSync(target);
const digest = (buf) => createHash('sha256').update(buf).digest('hex');
if (sourceBytes.length !== targetBytes.length ||
    digest(sourceBytes) !== digest(targetBytes)) {
  throw new Error('entry.png copy mismatch: target differs from source');
}
console.log(`wrote ${target} (${targetBytes.length} bytes, sha256 ${digest(targetBytes).slice(0, 16)}…)`);
