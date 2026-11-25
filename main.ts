// The Funniest Honest Appliance Error — u-xvader-the-funniest-honest-appliance-error-adec4450
// Reads the single-line entry from entry.txt and writes it verbatim to
// <output dir>/entry.txt. Node 22, stdlib only, no network, no wall clock.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(here, "entry.txt"), "utf8");

// The gate only accepts 1–200 characters of non-whitespace text, on one
// line. Fail loudly here instead of shipping an entry the scorer rejects.
const line = entry.replace(/\n$/, "");
if (line.length === 0 || line.trim().length === 0) {
  throw new Error("entry.txt is empty");
}
if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200 limit`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  process.env.MAKEFUN_BOT_DIR ??
  "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
