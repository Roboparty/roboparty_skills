---
name: rpo-introduction
description: Orient a new user to RoboParty Roboto Origin: what the open-source humanoid is, how the docs are organized, and the required reading order. Triggers: 基本介绍,阅读须知,是什么,入门,先看什么,Roboto Origin,萝博头.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 基本介绍与阅读须知

> 权威来源（先读原文，再动手）：[基本介绍与阅读须知](https://roboparty.feishu.cn/wiki/IyKNwwGcCiyjEckV9QucEuHcn10)

## When to use

当用户的问题涉及「基本介绍,阅读须知,是什么,入门,先看什么,Roboto Origin,萝博头」时使用本技能。

## Instructions

1. 先引导用户阅读《基本介绍与阅读须知》，了解文档结构与阅读顺序。
2. 说明 Roboto Origin 是全栈开源双足人形机器人，资料覆盖硬件、嵌入式、装配标定、算法仿真、部署 SDK。
3. 实操前务必先读安全操作指南。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
