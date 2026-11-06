---
name: rpo-stm32-firmware
description: Flash the USB-to-CANFD board firmware using STM32CubeProg. Triggers: STM32CubeProg,USB转CANFD,固件烧录,canfd板,刷固件.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# STM32CubeProg 烧录 USB 转 CANFD 板固件

> 权威来源（先读原文，再动手）：[STM32CubeProg 烧录 USB 转 CANFD 板固件](https://roboparty.feishu.cn/wiki/CmfmwUccailGsYkrdoYchaCinIc)

## When to use

当用户的问题涉及「STM32CubeProg,USB转CANFD,固件烧录,canfd板,刷固件」时使用本技能。

## Instructions

1. 使用 STM32CubeProg 按官方说明烧录 USB 转 CANFD 板固件。
2. 核对接线、启动模式与固件文件，引用原文截图步骤。
3. 烧录失败时检查驱动、BOOT 模式与线缆。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
