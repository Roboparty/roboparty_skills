---
name: rp1-mimic-dance
description: Use motion imitation / dance workflows: BeyondMimic and MimicLite motion tracking and retargeting. Triggers: 模仿学习,舞蹈,dance,BeyondMimic,MimicLite,动作追踪,retargeting,动捕.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 动作模仿与舞蹈

> 权威来源（先读原文，再动手）：[RP1 动作模仿与舞蹈](https://github.com/Roboparty/MimicLite)

## 相关仓库

- [Roboparty/MimicLite](https://github.com/Roboparty/MimicLite) —— 动作追踪/模仿
- [Roboparty/GMR](https://github.com/Roboparty/GMR) —— 人体动作重定向（retargeting）

## When to use

当用户的问题涉及「模仿学习,舞蹈,dance,BeyondMimic,MimicLite,动作追踪,retargeting,动捕」时使用本技能。

## Instructions

1. 舞蹈用 BeyondMimic，动作追踪用 MimicLite；动捕数据经 retargeting 迁移。
2. 训练/部署入口与依赖以对应仓库说明为准。
3. 主从遥操注意延时与 Pico 连接稳定性。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
