---
name: rp1-motor
description: Bring up and debug RP1 joint modules/motors (self-developed ROMOMO, Leisai, Daomiao): CAN-FD, MIT mode, over-current/under-voltage. Triggers: 关节模组,电机,ROMOMO,雷赛,达妙,MIT,过流,欠压,kp,kd.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 关节模组与电机

> 权威来源（先读原文，再动手）：[RP1 关节模组与电机](https://github.com/Roboparty/roboparty_motors)

## 相关仓库

- [Roboparty/roboparty_motors](https://github.com/Roboparty/roboparty_motors) —— 电机驱动（LRO/DM/EVO/RP/XYN）

## When to use

当用户的问题涉及「关节模组,电机,ROMOMO,雷赛,达妙,MIT,过流,欠压,kp,kd」时使用本技能。

## Instructions

1. 先确认供电（臂"不动 / error_id=0x3 欠压 / No fresh feedback / 整板重启"多因臂电机电源未上电）、CANFD 通信、节点 ID 与 MIT 参数（kp/kd 以文档为准，勿过大）。
2. 高动态动作易引发过流/欠压，结合 BMS 与报文排查；LRO CAN 超时阈值由部署脚本 deploy_motorlro_params.py 写入（驱动不写）。
3. 自研模组 ROMOMO 资料见开源计划书；固件更新后重新调试。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
