---
name: rpo-safety-guide
description: Apply the Roboto Origin safety operation guide: power-on/off sequence, emergency stop, safe debugging, and the protective harness requirement. Triggers: 安全,急停,开机,关机,安全操作,注意事项,吊架,防摔.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 安全操作指南

> 权威来源（先读原文，再动手）：[安全操作指南](https://roboparty.feishu.cn/wiki/ZGtnwpHCjii2XykBYMGchoBBnSl)

## When to use

当用户的问题涉及「安全,急停,开机,关机,安全操作,注意事项,吊架,防摔」时使用本技能。

## Instructions

1. 任何上电调试前确认急停可用、机器人处于安全姿态，建议使用防摔吊架。
2. 严格按《安全操作指南 V1.1.1》的开关机顺序操作。
3. 出现异响、过热、剧烈抖动立即急停并断电。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
