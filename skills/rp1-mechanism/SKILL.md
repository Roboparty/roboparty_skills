---
name: rp1-mechanism
description: Understand RP1 mechanisms: upper/lower limb clamp mounts, ankle parallel linkage, hollow-shaft cable routing, and the hot-swap torso energy system. Triggers: 机械结构,抱箍,踝关节,并联连杆,中空走线,上肢,下肢,躯干.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 机械结构


## When to use

当用户的问题涉及「机械结构,抱箍,踝关节,并联连杆,中空走线,上肢,下肢,躯干」时使用本技能。

## Instructions

1. 上肢/大腿用抱箍固定、大臂前后分件、磁吸面板、末端快换。
2. 踝部双推杆并联、执行器上移降低小腿惯量；线缆走中空轴。
3. 尺寸/材料（40Cr/钛合金等）以技术报告原文为准。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
