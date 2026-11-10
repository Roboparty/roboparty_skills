---
name: rp1-safety
description: Apply RP1 machine safety, electrical connection requirements (SAFETY.md), emergency stop, and safe commissioning. Triggers: 安全,接电要求,SAFETY,急停,安全调试,吊架,防摔,commissioning.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 安全与接电


## When to use

当用户的问题涉及「安全,接电要求,SAFETY,急停,安全调试,吊架,防摔,commissioning」时使用本技能。

## Instructions

1. 上电调试确认急停可用、安全姿态与吊架；遵守接电要求。
2. 异响/过热/剧烈抖动立即急停断电。
3. SAFETY.md 若缺失需补齐，以技术报告安全章节为准。
4. 注意：现役固件无独立于主控的电机侧安全兜底（主控断联不向电机卸力，MCU 看门狗仅复位自身）；主控异常时必须人工急停/断电。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
