---
name: rpo-motor-debug
description: Step-by-step bring-up and debugging of Daomiao (达妙) motors on Roboto Origin, including MIT mode parameters. Triggers: 达妙,电机调试,电机不转,MIT,kp,kd,电机报错,保姆级.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 达妙电机保姆级调试流程

> 权威来源（先读原文，再动手）：[达妙电机保姆级调试流程](https://roboparty.feishu.cn/wiki/MXlGwSZH5iYGrnkU5JTcVKU3nFd)

## When to use

当用户的问题涉及「达妙,电机调试,电机不转,MIT,kp,kd,电机报错,保姆级」时使用本技能。

## Instructions

1. 按《达妙电机保姆级调试流程文档》逐步排查。
2. 先确认供电、CANFD 通信、ID 与 MIT 参数（kp/kd 以文档为准，勿过大）。
3. 电机抖动/报错时对照文档逐项检查，保留原始报错码。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
