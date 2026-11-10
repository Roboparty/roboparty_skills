---
name: rp1-overview
description: Orient to RP1, the full-size open-source humanoid: positioning, six-layer hardware architecture, RK3588 + real-time MCU, dual-bus power, and the Tech Report as the authoritative backbone. Triggers: RP1,是什么,总览,技术报告,Tech Report,定位,规格.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 总览与技术报告


## 相关仓库

- [Roboparty/roboparty_repo](https://github.com/Roboparty/roboparty_repo) —— 整机多仓组合入口（BSP/固件/应用/技能）
- [Roboparty/roboto_origin](https://github.com/Roboparty/roboto_origin)

## When to use

当用户的问题涉及「RP1,是什么,总览,技术报告,Tech Report,定位,规格」时使用本技能。

## Instructions

1. 以《RP1 Tech Report v0.8.12》为权威骨架，标注「待验证」的参数不要写成已确认性能。
2. 先讲产品定位与六层硬件架构，再展开电气、机械、嵌入式、算法各章。
3. 具体参数以技术报告原文为准，先 docs_search_docs 核对。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
