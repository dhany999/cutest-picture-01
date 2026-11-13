// main.ts — make.fun cutest-picture-01 entry (Node 22, standard library only).
// Copies entry.png (the cute kitten picture beside this file) to the output
// directory the grader provides.
// The entry's picture is the entry.png beside this file; the program copies it
// to the output directory the grader provides.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
