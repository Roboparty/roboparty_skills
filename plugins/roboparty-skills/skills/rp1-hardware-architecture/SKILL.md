---
name: rp1-hardware-architecture
description: Explain RP1 six-layer hardware architecture (sensing, HMI, main control, expansion, actuators, power) and the five isolated CAN-FD buses. Triggers: 硬件架构,六层,感知层,主控层,CANFD网段,5路,模块解耦,算力扩展.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 分层硬件架构


## When to use

当用户的问题涉及「硬件架构,六层,感知层,主控层,CANFD网段,5路,模块解耦,算力扩展」时使用本技能。

## Instructions

1. 按技术报告 2.2 节讲解六层分层与模块解耦、算力弹性、安全兜底三大设计目标。
2. 技术报告述 5 路独立 CAN-FD 网段（上肢/下肢/腰颈/末端），故障不扩散；整机电机链路实测为 4 路 can0–can3，另有 SoC 侧 can_top/bottom/hipnuc，具体以技术报告 2.2 原文为准。
3. 板卡与器件型号以原文为准，不推断。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
