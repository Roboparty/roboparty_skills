---
name: rp1-navigation
description: Run RP1 navigation: localization, mapping, obstacle avoidance, with lidar/depth/IMU. Triggers: 导航,定位,建图,避障,nav,雷达,深度.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 导航

> 权威来源（先读原文，再动手）：[RP1 导航](https://github.com/Roboparty/roboparty_navigation)

## 相关仓库

- [Roboparty/roboparty_navigation](https://github.com/Roboparty/roboparty_navigation)

## When to use

当用户的问题涉及「导航,定位,建图,避障,nav,雷达,深度」时使用本技能。

## Instructions

1. 按 roboparty_navigation 配置定位/建图/避障。
2. 导航异常先查雷达/深度/IMU 驱动与标定。
3. 话题/节点名以仓库文档为准。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
