---
name: rp1-dexhand
description: Use the RP_Hand 6DOF dexterous-hand driver: SocketCAN CAN-FD, dexhand_py/HandDriver, config tool; ROS2 Jazzy downstream. Triggers: 灵巧手,RP_Hand,6DOF,dexhand,HandDriver,手指,canfd.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP_Hand 灵巧手驱动

> 权威来源（先读原文，再动手）：[RP_Hand 灵巧手驱动](https://github.com/Roboparty/roboparty_dexhand)

## 相关仓库

- [Roboparty/roboparty_dexhand](https://github.com/Roboparty/roboparty_dexhand) —— C++/Python 驱动 + dexhand_node
- [Roboparty/roboparty_dexhand_ros](https://github.com/Roboparty/roboparty_dexhand_ros) —— 旧 Python ROS 源（非在役）
- [Roboparty/roboparty_dexhand_teleop](https://github.com/Roboparty/roboparty_dexhand_teleop) —— 操作端手映射

## When to use

当用户的问题涉及「灵巧手,RP_Hand,6DOF,dexhand,HandDriver,手指,canfd」时使用本技能。

## Instructions

1. roboparty_dexhand 提供 C++/Python 驱动，镜像已内置，无需重复编译。
2. 板端 ROS2 双手控制用在役合并包 rp1_deploy/src/dexhand（C++ dexhand_node；roboparty_dexhand_ros 为旧 Python 源、非在役）；遥操用 roboparty_dexhand_teleop。
3. 节点 ID 1..127，参数与配置以仓库说明为准。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
