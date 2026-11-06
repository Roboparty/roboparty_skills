# roboparty-skills

[中文](README.md) | English

Agent Skills for RoboParty humanoid robots (**Roboto Origin** and **RP1**). A skill is
a portable `SKILL.md` plus optional scripts that tells an AI agent how to flash, wire,
calibrate, debug, train, deploy and operate the robot safely.

- Documentation: <https://roboparty.com/roboto_origin/doc>
- MCP runtime: [Roboparty/roboparty_mcp](https://github.com/Roboparty/roboparty_mcp)
- Website: <https://roboparty.com>
- License: GPL-3.0-only

## Skills vs MCP

- **Skills (this repository)**: procedures, safety checks, tool selection and examples.
- **MCP (roboparty_mcp)**: executable tools such as `control_*`, `docs_*`, `system1_*`.

Skills contain no control code and no robot token; control authorization stays in the
MCP/rp_server layers.

## Install

```bash
git clone https://github.com/Roboparty/roboparty_skills.git
cp -R roboparty_skills/skills/* ~/.claude/skills/
```

Client directories: Claude Code `~/.claude/skills`, Cursor `~/.cursor/skills`, Codex
`~/.codex/skills`. Copy `skills/<name>/` to install a single skill.

Plugin install: add this repository as a local plugin marketplace. Manifests live in
`.claude-plugin/`, `.cursor-plugin/` and `.dsh-plugin/`; plugin skills are mirrored under
`plugins/roboparty-skills/skills/`.

## MCP companion

```bash
git clone https://github.com/Roboparty/roboparty_mcp.git
cd roboparty_mcp
npm install
npm run build
node src/index.mjs --check
```

npm publication is pending; once published use `npx -y roboparty-mcp`. Run
`node src/index.mjs --setup` once for the control MCP Python runtime.

## Skills

| Category | Skills |
|---|---|
| RP1 嵌入式固件 | `rp1-main-controller`, `rp1-bsp-firmware` |
| RP1 总览 | `rp1-overview`, `rp1-safety`, `rp1-prd` |
| RP1 机械结构 | `rp1-mechanism` |
| RP1 模型部署 | `rp1-description`, `rp1-deploy`, `rp1-dexhand`, `rp1-navigation`, `rp1-joystick-teleop` |
| RP1 测试开源 | `rp1-test`, `rp1-hardware-open` |
| RP1 硬件电气 | `rp1-hardware-architecture`, `rp1-electrical-power`, `rp1-canfd-bus`, `rp1-motor` |
| RP1 算法训练 | `rp1-rl-training`, `rp1-mimic-dance`, `rp1-bfm` |
| 入门指引 | `rpo-introduction` |
| 安全规范 | `rpo-safety-guide` |
| 嵌入式软件 | `rpo-embedded-software` |
| 开源与社区 | `rpo-community-contributing`, `rpo-license` |
| 文档写作 | `article-writer` |
| 文档检索 | `roboparty-docs` |
| 服务与支持 | `rpo-after-sales`, `rpo-qa` |
| 烧录与固件 | `rpo-burn-flash`, `rpo-stm32-firmware` |
| 硬件与电气 | `rpo-hardware-electrical`, `rpo-motor-debug`, `rpo-industrial-design`, `rpo-bom-parts` |
| 算法与软件 | `rpo-motion-control`, `rpo-rl-training`, `rpo-navigation` |
| 装配与标定 | `rpo-zero-calibration`, `rpo-wiring`, `rpo-assembly` |
| 部署与SDK | `rpo-deploy-sdk` |

## Contributing

1. Add `skills/<name>/SKILL.md` with frontmatter and instructions.
2. Register it in `skills.sh.json` and run `node scripts/sync-plugin.mjs`.
3. Run `node scripts/validate-release.mjs` until it prints `RELEASE CHECK PASSED`.
4. Open a pull request.

## License

This repository is licensed under **GPL-3.0-only** (see [LICENSE](LICENSE)). Linked
official docs, Feishu documents and third-party repositories keep their own terms.
