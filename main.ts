// One Word From Grandma — make.fun one-word entry.
// This program writes exactly one word to /output/entry.txt: the single
// word a grandma would text about AI.
// The word is a fixed string below (do not edit its text); the program only
// validates it against the gate (1-30 chars, non-whitespace UTF-8) and
// writes it out, then reads it back to prove the output is byte-identical.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Word From Grandma entry: the single word a grandma would text about
// AI. The program writes exactly this word to /output/entry.txt
// (1-30 chars, UTF-8).
const WORD = "Robit";

// The gate requires 1-30 characters of non-whitespace UTF-8 text.
if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  throw new Error("word must be 1-30 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Read-back check: the output file must contain exactly the word, no more,
// no less. Fail loudly instead of silently shipping a corrupted entry.
if (readFileSync("/output/entry.txt", "utf8") !== WORD) {
  throw new Error("output file does not match the entry word");
}
