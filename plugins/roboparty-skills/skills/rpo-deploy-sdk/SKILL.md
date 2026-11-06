---
name: rpo-deploy-sdk
description: Deploy on Roboto Origin and use the SDK: ROS2 drivers, inference, joystick control, Python SDK. Triggers: 部署,SDK,ROS2,驱动,推理,手柄,Python,deploy.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 部署与 SDK

> 权威来源（先读原文，再动手）：[部署与 SDK](https://roboparty.feishu.cn/wiki/KFVdwvpIxi3jdak7Pv6cP7XDnbg)

## When to use

当用户的问题涉及「部署,SDK,ROS2,驱动,推理,手柄,Python,deploy」时使用本技能。

## Instructions

1. 按《部署与 SDK》完成 ROS2 部署、推理与手柄/Python 调用。
2. 包名、节点名、API 一律引用官方文档，不要凭记忆。
3. 部署前确认主控镜像与固件版本匹配。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
