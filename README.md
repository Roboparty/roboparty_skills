# roboparty-skills

中文 | [English](README_EN.md)

RoboParty 人形机器人（**Roboto Origin / 萝博头原型机** 与 **RP1**）的 Agent Skills。
技能是可移植的指令集（`SKILL.md` 加可选脚本），指导 AI 按官方流程完成烧录、走线、
标定、调试、训练、部署和安全操作。

- 文档中心：<https://roboparty.com/roboto_origin/doc>
- MCP 运行时：[Roboparty/roboparty_mcp](https://github.com/Roboparty/roboparty_mcp)
- 官网：<https://roboparty.com>
- 许可证：GPL-3.0-only

## 技能与 MCP 的分工

- **Skills（本仓）**：操作流程、安全检查、工具选择和使用示例。
- **MCP（roboparty_mcp）**：真正执行的工具，例如 `control_*`、`docs_*`、`system1_*`。

技能不包含控制代码，也不携带机器人 token；控制权限只由 MCP 和 rp_server 授权。

## 安装

```bash
git clone https://github.com/Roboparty/roboparty_skills.git
cp -R roboparty_skills/skills/* ~/.claude/skills/
```

客户端目录：Claude Code `~/.claude/skills`，Cursor `~/.cursor/skills`，Codex
`~/.codex/skills`。只装单个技能时复制 `skills/<name>/`。

插件安装：把本仓作为本地插件市场，清单在 `.claude-plugin/`、`.cursor-plugin/`、
`.dsh-plugin/`，插件技能在 `plugins/roboparty-skills/skills/`。

## MCP 配套

```bash
git clone https://github.com/Roboparty/roboparty_mcp.git
cd roboparty_mcp
npm install
npm run build
node src/index.mjs --check
```

npm 发布尚未完成；发布后可用 `npx -y roboparty-mcp`。控制 MCP 首次使用执行
`node src/index.mjs --setup`。

## 技能清单

| 分类 | 技能 |
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

## 贡献

1. 在 `skills/<name>/SKILL.md` 写 frontmatter 和指令。
2. 在 `skills.sh.json` 注册，运行 `node scripts/sync-plugin.mjs`。
3. 运行 `node scripts/validate-release.mjs`，输出 `RELEASE CHECK PASSED`。
4. 提交 Pull Request。

## 许可证

本仓库使用 **GPL-3.0-only**（见 [LICENSE](LICENSE)）。技能中引用的官方文档、飞书资料和
第三方仓库仍受各自版权与许可约束。
