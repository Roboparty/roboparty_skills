---
name: rp1-electrical-power
description: Apply RP1 power design: 48V main battery plus 30V hot-swap backup, staged power-up sequencing, and safe shutdown. Triggers: 48V,30V,备用电池,热插拔,上电时序,电源,配电,欠压.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 电源与配电


## When to use

当用户的问题涉及「48V,30V,备用电池,热插拔,上电时序,电源,配电,欠压」时使用本技能。

## Instructions

1. 48V 主动力 + 30V 热插拔备用双轨；备用电池支持不关机更换与主电失效安全收容。
2. 严格按逐级上电时序，抑制浪涌；接电要求见技术报告。
3. 过流/欠压报错先查供电与电池，再查负载。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
