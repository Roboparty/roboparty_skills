---
name: rpo-embedded-software
description: Navigate the Roboto Origin embedded-software layer: firmware, main controller, and communication software. Triggers: 嵌入式,固件,主控软件,通信软件,嵌软,底层软件.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 嵌入式软件

> 权威来源（先读原文，再动手）：[嵌入式软件](https://roboparty.feishu.cn/wiki/SyuQwrapYiy61rkcrs3cZpL9nTe)

## When to use

当用户的问题涉及「嵌入式,固件,主控软件,通信软件,嵌软,底层软件」时使用本技能。

## Instructions

1. 按《嵌入式软件》索引了解固件、主控与通信软件结构。
2. 二次开发前先读部署与 SDK 文档。
3. 涉及闭源组件时以官方开源范围说明为准。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
