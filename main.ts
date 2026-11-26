import { mkdirSync, writeFileSync } from "node:fs";

// The AI therapist's diagnosis: chronic "just one more episode"
// syndrome — incurable, but manageable with one more episode. Calm
// clinical voice, the prescription is the disease itself, and the
// laugh lands at the very end. No chatbot-joke rerun.
const line =
  "Diagnosis: chronic 'just one more episode' syndrome — incurable, but we can manage it with one more episode.";

// Gate: the bounty only accepts a single line of 1 to 200 characters.
if (line.length < 1 || line.length > 200 || line.trim() !== line) {
  throw new Error(`Line fails the 1-200 character gate: ${line.length} chars`);
}

// Gate: exactly one line — no newline inside.
if (/\n/.test(line)) {
  throw new Error("Line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
console.log(line);
