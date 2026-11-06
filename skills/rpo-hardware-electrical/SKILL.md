---
name: rpo-hardware-electrical
description: Understand Roboto Origin hardware and electrical architecture, including the tri-in-one circuit board. Triggers: 硬件,电气,电路,三合一,原理图,供电,电压,接口.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 硬件与电气

> 权威来源（先读原文，再动手）：[硬件与电气](https://roboparty.feishu.cn/wiki/B2gXwTEPJi3i2IkpQesczpKvn8f)

## When to use

当用户的问题涉及「硬件,电气,电路,三合一,原理图,供电,电压,接口」时使用本技能。

## Instructions

1. 参考《硬件与电气》及《三合一电路 V1.0 硬件说明》理解供电与接口。
2. 电压/电流/针脚参数一律引用官方文档，不要推断。
3. 带电测量注意安全，异常先断电排查。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
