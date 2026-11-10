---
name: rp1-description
description: Use RP1 robot description files: URDF (rp1 28dof / 24dof) and MJCF (robot, 24dof, flat/rough terrain) with meshes and terrain assets. Triggers: URDF,MJCF,rp1_description,28dof,24dof,运动学,碰撞,网格,仿真模型.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 机器人描述文件

> 权威来源（先读原文，再动手）：[RP1 机器人描述文件](https://github.com/Roboparty/rp1_description)

## 相关仓库

- [Roboparty/rp1_description](https://github.com/Roboparty/rp1_description) —— URDF/MJCF 与网格

## When to use

当用户的问题涉及「URDF,MJCF,rp1_description,24dof,运动学,碰撞,网格,仿真模型」时使用本技能。

## Instructions

1. urdf/ 下 rp1.urdf（28dof，在役）与 rp1_24dof.urdf；mjcf/ 下 robot、24dof、flat、rough。
2. 质量/惯量/关节限位/接触参数以仓库文件为准，对应具体配置。
3. 28/30/42dof 等变体以开源计划书与后续发布为准。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
