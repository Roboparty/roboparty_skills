---
name: rpo-after-sales
description: Apply Roboto Origin warranty and after-sales policy, including repair process and contact. Triggers: 保修,售后,返修,维修,质保,after-sales.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 保修和售后政策


## When to use

当用户的问题涉及「保修,售后,返修,维修,质保,after-sales」时使用本技能。

## Instructions

1. 按《保修和售后政策 V1.0》说明质保范围与返修流程。
2. 返修前引导用户导出设备日志、记录 SN 与故障现象。
3. 联系方式与时效以官方文档为准。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
