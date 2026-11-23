import { mkdirSync, writeFileSync } from "node:fs";

// One dad joke, written verbatim to /output/entry.txt.
const joke =
  "My daughter asked why I keep a pencil in my wallet. In case I need to draw some cash.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
