// One Star, Five Stars for the Food — make.fun program/v1 entry.
// Writes one sentence to /output/entry.txt: an alien tourist's one-star
// review of Earth that still slips in a real compliment about the food.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: your species queues for hours to worship glowing rectangles and charges rent just to sleep, but the dumplings were so good I applied for residency.";

// The sealed gate only accepts 1–200 characters, one sentence, not blank.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if ((ENTRY.match(/\./g) ?? []).length !== 1 || !/\S/.test(ENTRY)) {
  throw new Error("entry must be exactly one non-blank sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
