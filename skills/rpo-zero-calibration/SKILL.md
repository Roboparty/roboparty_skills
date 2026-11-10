---
name: rpo-zero-calibration
description: Perform joint zero-point / cylindrical-pin calibration on Roboto Origin. Triggers: 零点标定,圆柱销,标定,关节零点,校准,原点.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 圆柱销（零点）标定方案

> 权威来源（先读原文，再动手）：[圆柱销（零点）标定方案](https://roboparty.feishu.cn/wiki/MCq4wT3pIi5LG8kPAJLcBtBOnio)

## When to use

当用户的问题涉及「零点标定,圆柱销,标定,关节零点,校准,原点」时使用本技能。

## Instructions

1. 按《圆柱销标定方案》执行机械零点标定。
2. 标定前确认装配到位、关节可自由运动、电源稳定。
3. 标定结果异常时重新检查装配与走线，再重复标定。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
