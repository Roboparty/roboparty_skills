---
name: rpo-burn-flash
description: Flash the RDK X5 main controller image for Roboto Origin, then perform zero-point calibration and first startup. Triggers: 烧录,刷机,RDK X5,镜像,SD卡,启动,零点,开机烧录.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# RDK X5 烧录、零点标定与启动

> 权威来源（先读原文，再动手）：[RDK X5 烧录、零点标定与启动](https://roboparty.feishu.cn/wiki/GvUhwFZMoi1GYqk1NvMcglJInFc)

## When to use

当用户的问题涉及「烧录,刷机,RDK X5,镜像,SD卡,启动,零点,开机烧录」时使用本技能。

## Instructions

1. 按《RDKx5烧录及机器人零点标定与启动》原文操作，不要凭记忆给镜像名或步骤。
2. 先烧录主控镜像，再做零点标定，然后首次启动。
3. 镜像/版本号以官方文档为准，先 docs_search_docs 核对。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
