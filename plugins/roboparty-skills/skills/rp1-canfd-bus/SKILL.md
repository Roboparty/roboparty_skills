---
name: rp1-canfd-bus
description: Design/debug RP1 CAN-FD buses: topology, USB-to-CANFD via gs_usb/SocketCAN, Multi-TT hubs, and HPM5E00/HPM5E31 single-chip gateways. Triggers: CANFD,USB转CANFD,gs_usb,SocketCAN,Multi-TT,HPM,网关,bus-off,波特率.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 CAN-FD 总线与网关

> 权威来源（先读原文，再动手）：[Roboparty/roboparty_EtherCANFD](https://github.com/Roboparty/roboparty_EtherCANFD)（HPM MCU 的 gs_usb USB↔CAN-FD 网关固件；私有）+ 技术报告 2.5–2.6

## 相关仓库

- [Roboparty/roboparty_EtherCANFD](https://github.com/Roboparty/roboparty_EtherCANFD) —— HPM5E31/5E00 gs_usb USB↔CAN-FD 网关固件（私有；无权限找袁敬博开通）
- [Roboparty/roboparty_stm32_usbcan](https://github.com/Roboparty/roboparty_stm32_usbcan) —— STM32 系列 USB 转 CANFD（公开，另一代适配器）
- [hpmicro/hpm_sdk](https://github.com/hpmicro/hpm_sdk) —— HPM SDK（上游）

## When to use

当用户的问题涉及「CANFD,USB转CANFD,gs_usb,SocketCAN,Multi-TT,HPM,网关,bus-off,波特率」时使用本技能。

## Instructions

1. 现行配置 CAN-FD 仲裁 1Mbps / 数据段 5Mbps、单帧 64 字节（8Mbps 为芯片上限，非当前配置）；USB 网关走 gs_usb 挂为 SocketCAN。
2. 多路并发必须用 Multi-TT 扩展坞与 High Speed；单芯片网关用 HPM5E00/5E31。
3. Bus-off 不能依赖自动恢复：固件已禁用、restart-ms 对 gs_usb 不生效，需主机 `ip link down/up`（或启用固件自愈）；用 candump/dmesg 对齐排查丢帧。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
