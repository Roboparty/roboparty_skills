---
name: rp1-joystick-teleop
description: Operate RP1 by joystick/phone app or XR teleop: remote start/stop/e-stop, status screen, whole-body teleoperation. Triggers: 手柄,手机app,遥控器,遥操,XR,远程急停,teleop,joystick.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 手柄与遥操作

> 权威来源（先读原文，再动手）：[RP1 手柄与遥操作](https://github.com/Roboparty/roboparty_xr_teleop)

## 相关仓库

- [Roboparty/roboparty_xr_teleop](https://github.com/Roboparty/roboparty_xr_teleop) —— XR 遥操作
- [Roboparty/roboparty_teleop_wam](https://github.com/Roboparty/roboparty_teleop_wam) —— 全身遥操作
- [Roboparty/roboparty_joystick](https://github.com/Roboparty/roboparty_joystick) —— 手柄/手机 app（远程开关机、急停、状态；私有）

## When to use

当用户的问题涉及「手柄,手机app,遥控器,遥操,XR,远程急停,teleop,joystick」时使用本技能。

## Instructions

1. 手柄/手机 app 支持远程开关机、急停、状态查看（RP1_joystick）。
2. 全身遥操走 roboparty_xr_teleop / roboparty_teleop_wam，控制延时。
3. 使用方式与设备连接以仓库说明为准。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
