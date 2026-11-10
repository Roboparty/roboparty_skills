---
name: rp1-bsp-firmware
description: Build RP1 plugin-style BSP: kernel patches decoupled as plugins, Debian .deb packages, image build, and OTA with rollback. Triggers: BSP,插件化,.deb,镜像构建,OTA,内核补丁,驱动包,回滚.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 BSP 与固件

> 权威来源（先读原文，再动手）：[RP1 BSP 与固件](https://github.com/Roboparty/roboparty_build)

## 相关仓库

- [Roboparty/roboparty_build](https://github.com/Roboparty/roboparty_build) —— 内核/BSP 与补丁
- [Roboparty/roboparty_image](https://github.com/Roboparty/roboparty_image) —— 系统镜像（robopi1/2/3）
- [Roboparty/roboparty_EtherCANFD](https://github.com/Roboparty/roboparty_EtherCANFD) —— HPM MCU 固件（私有）

## When to use

当用户的问题涉及「BSP,插件化,.deb,镜像构建,OTA,内核补丁,驱动包,回滚」时使用本技能。

## Instructions

1. BSP 以 patch 形式与主线解耦，CI 交叉编译标准 .deb 驱动包与镜像。
2. OTA 应用层/系统层独立升级、可回滚，降低变砖风险。
3. 固件/镜像仓库：roboparty_build、roboparty_image、roboparty_EtherCANFD。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
