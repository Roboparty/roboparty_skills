---
name: rpo-motion-control
description: Apply Roboto Origin humanoid motion-control know-how: locomotion controller, control frequency, and debugging. Triggers: 运动控制,步态,locomotion,控制频率,运控,行走,200hz.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 人形机器人运动控制 Know-How

> 权威来源（先读原文，再动手）：[人形机器人运动控制 Know-How](https://roboparty.feishu.cn/wiki/GvUxwKVeNiGa7kku6vEcvqfKn87)

## When to use

当用户的问题涉及「运动控制,步态,locomotion,控制频率,运控,行走,200hz」时使用本技能。

## Instructions

1. 参考《人形机器人运动控制 Know-How》理解运控链路与实时控制。
2. 控制频率、接口名以官方文档为准。
3. 运控异常结合日志与零点标定结果排查。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
