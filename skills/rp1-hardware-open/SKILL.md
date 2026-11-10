---
name: rp1-hardware-open
description: Use the RP1 hardware open-source package: 00_Docs, 01_Mechanic, 02_PCB, 03_Harness, 04_BOM, with model/drawing/BOM cross-checks. Triggers: 硬件开源,rp1_hardware,图纸,PCB,线束,BOM,模型,制造资料.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 硬件开源资料


## 相关仓库

- `Roboparty/rp1_hardware` —— 私有，无权限时找袁敬博开通（Docs/Mechanic/PCB/Harness/BOM）

## When to use

当用户的问题涉及「硬件开源,rp1_hardware,图纸,PCB,线束,BOM,模型,制造资料」时使用本技能。

## Instructions

1. rp1_hardware 含 Docs/Mechanic/PCB/Harness/BOM；核对模型、图纸与 BOM 对应。
2. 仓库可能为私有；飞书整理文件夹见链接。
3. 缺制造资料/SOP 时按孙浩楠列出的缺口补齐，勿臆造。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
