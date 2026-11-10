---
name: rpo-qa
description: Answer frequently asked questions about Roboto Origin from the official QA. Triggers: 常见问题,QA,FAQ,经常问,常见qa.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 常见 QA

> 权威来源（先读原文，再动手）：[常见 QA](https://roboparty.feishu.cn/wiki/CCvKwlkaziXcUJkKk7Pco3tknoc)

## When to use

当用户的问题涉及「常见问题,QA,FAQ,经常问,常见qa」时使用本技能。

## Instructions

1. 优先检索《常见 QA》，用官方答案回答。
2. QA 未覆盖的问题引导提交工单问卷。
3. 答案附官方文档链接。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
