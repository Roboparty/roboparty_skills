---
name: rp1-main-controller
description: Use the RP1 heterogeneous main controller: RK3588 (NPU/LPDDR/eMMC) plus a 480MHz real-time MCU (USB-CANFD gateway), Armbian base, Linux 6.18 PREEMPT_RT. Triggers: RK3588,实时MCU,异构,Armbian,PREEMPT_RT,主控,480MHz,内核.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 异构主控


## 相关仓库

- [Roboparty/roboparty_build](https://github.com/Roboparty/roboparty_build) —— 内核/BSP（RoboPi2 6.18 PREEMPT_RT、隔离、gs_usb 补丁）
- [Roboparty/roboparty_EtherCANFD](https://github.com/Roboparty/roboparty_EtherCANFD) —— 实时 MCU（HPM）USB-CANFD 网关固件（私有）

## When to use

当用户的问题涉及「RK3588,实时MCU,异构,Armbian,PREEMPT_RT,主控,480MHz,内核」时使用本技能。

## Instructions

1. RK3588 跑视觉/策略（50Hz 推理）；480MHz 实时 MCU（HPM）承担 USB-CANFD 网关与时序，硬件级隔离（注意：现役固件无独立于主控的电机侧急停/卸力，详见 rp1-safety）。
2. 系统基于 Armbian + Linux 6.18 PREEMPT_RT；控制环频率以配置为准（仓库默认 250Hz，现场快照 750Hz，500Hz 为目标态）。
3. 平台选型支持 RK3588/RDK X5/A733/Orin NX 等，整机现行目标为 RoboPi2（RK3588），选型见技术报告 2.4。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
