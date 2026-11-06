---
name: rp1-bfm
description: Use RP1 behavior foundation models: UFO, P-BFM (perceptive), I-BFM (interactive), plus GMR/PredActor/ACoT-VLA references. Triggers: 行为基础模型,BFM,UFO,P-BFM,I-BFM,VLA,GMR,PredActor.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 行为基础模型

> 权威来源（先读原文，再动手）：[RP1 行为基础模型](https://github.com/Roboparty/UFO)

## 相关仓库

- [Roboparty/UFO](https://github.com/Roboparty/UFO) —— 通用行为基础模型
- [Roboparty/P-BFM](https://github.com/Roboparty/P-BFM) —— 感知行为基础模型
- [Roboparty/I-BFM-Code](https://github.com/Roboparty/I-BFM-Code) —— 交互行为基础模型
- [Roboparty/PredActor](https://github.com/Roboparty/PredActor) —— 行为预测
- [Roboparty/ACoT-VLA](https://github.com/Roboparty/ACoT-VLA) —— VLA
- [Roboparty/GMR](https://github.com/Roboparty/GMR)

## When to use

当用户的问题涉及「行为基础模型,BFM,UFO,P-BFM,I-BFM,VLA,GMR,PredActor」时使用本技能。

## Instructions

1. UFO/P-BFM/I-BFM 分别对应通用/感知/交互行为基础模型。
2. VLA 端到端部署算力需求高，按选配执行。
3. 各模型仓库的运行方式与权重以其 README 为准。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
