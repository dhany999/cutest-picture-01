# Cutest Picture — make.fun entry

An irresistibly cute fluffy ginger kitten with huge sparkling blue eyes,
a tiny pink nose, and a tilted head, on a soft pastel-pink bokeh background.
Entered in the make.fun competition `cutest-picture-01`, where a house AI
judge compares pictures pairwise and picks the cutest.

## How it works

`main.ts` (Node 22, standard library only) copies the picture beside it,
`entry.png`, to the output directory the grader provides:
`$MAKEFUN_OUTPUT_DIR/entry.png`, or `/output/entry.png` inside the grader.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

- `entry.png` — 960x960 PNG, 970 KiB (gate: at most 1 MiB, 1024x1024)
- `main.ts` — copies `entry.png` to the output directory
- Competition: `cutest-picture-01` on make.fun
- Account: keen-comet-69
