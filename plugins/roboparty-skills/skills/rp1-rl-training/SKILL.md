---
name: rp1-rl-training
description: Train RP1 locomotion: IsaacSim + Isaac Lab + RSL-RL (versions per repo README), AMP/Parkour, MuJoCo Sim2Sim, policy export. Triggers: 强化学习,训练,IsaacLab,RSL-RL,Sim2Sim,AMP,Parkour,walk,run.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 强化学习训练

> 权威来源（先读原文，再动手）：[RP1 强化学习训练](https://github.com/Roboparty/roboparty_train)

## 相关仓库

- [Roboparty/roboparty_train](https://github.com/Roboparty/roboparty_train) —— 训练入口
- [Roboparty/robolab](https://github.com/Roboparty/robolab)
- [Roboparty/rsl_rl](https://github.com/Roboparty/rsl_rl)
- [Roboparty/legged_lab](https://github.com/Roboparty/legged_lab)

## When to use

当用户的问题涉及「强化学习,训练,IsaacLab,RSL-RL,Sim2Sim,AMP,Parkour,walk,run」时使用本技能。

## Instructions

1. roboparty_train 基于 IsaacSim/IsaacLab/RSL-RL，含 robolab 与 rsl_rl 子模块。
2. 支持 walk/run、AMP、Parkour；训练后先 Sim2Sim 再实机。
3. 版本号以仓库 README 为准。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
