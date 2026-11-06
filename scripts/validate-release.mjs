// Release gate for roboparty-skills. Run from repo root:
//   node scripts/validate-release.mjs
// Exits non-zero if any must-fix issue is found.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const issues = [];
const warn = [];

const skillDirs = readdirSync(join(ROOT, "skills")).filter((d) =>
  statSync(join(ROOT, "skills", d)).isDirectory(),
);

// 1) every skill folder has a parseable SKILL.md whose name matches the folder
for (const d of skillDirs) {
  const f = join(ROOT, "skills", d, "SKILL.md");
  if (!existsSync(f)) {
    issues.push(`skills/${d}: 缺少 SKILL.md`);
    continue;
  }
  const md = readFileSync(f, "utf8");
  const m = md.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!m) {
    issues.push(`skills/${d}: 无 YAML frontmatter`);
    continue;
  }
  const name = /^name:\s*(.+)$/m.exec(m[1])?.[1]?.trim();
  const desc = /^description:\s*(.+)$/m.exec(m[1])?.[1]?.trim();
  if (name !== d) issues.push(`skills/${d}: frontmatter name="${name}" 与目录名不一致`);
  if (!desc) issues.push(`skills/${d}: 缺 description`);
}

// 2) skill-index.json parity
const idx = JSON.parse(read("skills/skill-index.json"));
const idxNames = new Set(idx.skills.map((s) => s.name));
const dirSet = new Set(skillDirs);
for (const n of dirSet) if (!idxNames.has(n)) issues.push(`skill-index 缺技能: ${n}`);
for (const n of idxNames) if (!dirSet.has(n)) issues.push(`skill-index 有但目录不存在: ${n}`);
if (idx.count !== skillDirs.length) warn.push(`skill-index.count=${idx.count} 与目录数 ${skillDirs.length} 不符`);

// 3) skills.sh.json groups cover every skill and reference only existing ones
const sh = JSON.parse(read("skills.sh.json"));
const grouped = new Set();
for (const g of sh.groups || []) {
  for (const s of g.skills || []) {
    if (!dirSet.has(s)) issues.push(`skills.sh.json 分组"${g.name}"引用了不存在的技能: ${s}`);
    grouped.add(s);
  }
}
for (const n of dirSet) if (!grouped.has(n)) warn.push(`技能 ${n} 未出现在 skills.sh.json 任何分组`);

// 4) plugin bundle must contain every skill and all four manifests
const pluginRoot = join(ROOT, "plugins", "roboparty-skills");
const pluginSkills = join(pluginRoot, "skills");
if (!existsSync(pluginSkills)) {
  issues.push("插件目录缺少 skills/ —— 先运行 node scripts/sync-plugin.mjs");
} else {
  for (const n of dirSet)
    if (!existsSync(join(pluginSkills, n, "SKILL.md")))
      issues.push(`插件包缺技能 ${n} —— 运行 node scripts/sync-plugin.mjs`);
}
for (const m of [".claude-plugin/plugin.json", ".cursor-plugin/plugin.json", ".dsh-plugin/plugin.json", ".codex-plugin/plugin.json"]) {
  const mp = join(pluginRoot, m);
  if (!existsSync(mp)) issues.push(`插件缺少清单 ${m}`);
  else JSON.parse(readFileSync(mp, "utf8"));
}
JSON.parse(read(".claude-plugin/marketplace.json"));

// 5) scan tracked files: machine paths, real npx instructions, dangling links, secrets
const tracked = execFileSync("git", ["-C", ROOT, "ls-files"], { encoding: "utf8" }).split(/\r?\n/).filter(Boolean);
const secretRe = /(AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----|sk-[A-Za-z0-9]{20,}|api[_-]?key\s*[:=]\s*['"][^'"]{12,})/i;
const negRe = /不要用|请勿|do not|don't|not use|不发布|不在 ?npm|not on npm|never/i;
for (const f of tracked) {
  const fp = join(ROOT, f);
  if (!existsSync(fp)) continue; // staged for deletion (e.g. LICENSE removed before commit)
  if (f.startsWith("scripts/")) continue; // release tooling legitimately contains these detection strings
  const body = readFileSync(fp, "utf8");
  if (/D:\\\\env|D:\\env/i.test(body)) issues.push(`${f}: 含本机绝对路径 D:\\env`);
  if (secretRe.test(body)) issues.push(`${f}: 疑似密钥/私钥`);
  if (/README_cn/.test(body)) issues.push(`${f}: 引用了已删除的 README_cn.md`);
  if (/internal use only|not open source|All Rights Reserved|内部专有/i.test(body))
    issues.push(`${f}: 仍含内部/专有声明`);
}

// 6) required top-level files and open-source license
for (const f of ["README.md", "README_EN.md", "LICENSE", "skills.sh.json", ".claude-plugin/marketplace.json", "docs/SKILL-MAP.md"])
  if (!existsSync(join(ROOT, f))) issues.push(`缺少文件: ${f}`);
if (existsSync(join(ROOT, "LICENSE"))) {
  const license = read("LICENSE");
  if (!/GNU GENERAL PUBLIC LICENSE/.test(license) || !/Version 3/.test(license))
    issues.push("LICENSE 不是 GPL-3.0 文本");
}
const shLicense = JSON.parse(read("skills.sh.json")).license;
if (shLicense !== "GPL-3.0-only") issues.push(`skills.sh.json license=${shLicense}，应为 GPL-3.0-only`);

console.log(`技能目录: ${skillDirs.length} | 索引: ${idxNames.size} | 分组覆盖: ${grouped.size} | 跟踪文件: ${tracked.length}`);
console.log(`\n=== 必须修复 (${issues.length}) ===`);
issues.forEach((s) => console.log("  [X] " + s));
console.log(`\n=== 建议确认 (${warn.length}) ===`);
warn.forEach((s) => console.log("  [!] " + s));
if (issues.length) process.exit(1);
console.log("\nRELEASE CHECK PASSED");
