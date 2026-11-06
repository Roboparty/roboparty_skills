// Sync the distributable plugin bundle with the canonical root skills/ directory.
// Root skills/ is the source of truth; the Claude/Cursor/dsh/Codex plugin under
// plugins/roboparty-skills/skills must contain the same skill folders so that installing
// via a local plugin marketplace delivers every skill (this repo is not on npm).
//
// Run after adding/editing a skill and before committing a release:
//   node scripts/sync-plugin.mjs
import { cpSync, rmSync, existsSync, readdirSync, statSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "skills");
const dest = join(root, "plugins", "roboparty-skills", "skills");

const skillDirs = readdirSync(src).filter((d) => statSync(join(src, d)).isDirectory());
if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });

let copied = 0;
for (const d of skillDirs) {
  if (!existsSync(join(src, d, "SKILL.md"))) {
    console.warn(`skip ${d}: no SKILL.md`);
    continue;
  }
  cpSync(join(src, d), join(dest, d), { recursive: true });
  copied += 1;
}
console.log(`synced ${copied} skills -> plugins/roboparty-skills/skills`);
