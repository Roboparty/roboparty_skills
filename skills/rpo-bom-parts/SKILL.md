---
name: rpo-bom-parts
description: Reference the Roboto Origin parts list (BOM) V1.1.3 for replication and spare parts. Triggers: 散件清单,BOM,零件清单,物料,备件,复刻清单.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 散件清单（BOM）

> 权威来源（先读原文，再动手）：[散件清单（BOM）](https://roboparty.feishu.cn/wiki/BpOgwSm0KicRUDkwEt5cvgPDnnh)

## When to use

当用户的问题涉及「散件清单,BOM,零件清单,物料,备件,复刻清单」时使用本技能。

## Instructions

1. 按《散件清单 V1.1.3》核对物料与备件。
2. 复刻采购以清单为准，注意规格参数。
3. 清单版本以官方最新发布为准。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
