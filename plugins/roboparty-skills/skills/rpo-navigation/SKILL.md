---
name: rpo-navigation
description: Use the Roboto Origin navigation package: 3D localization mixed with 2D navigation. Triggers: 导航,定位,nav2,建图,navigation,避障.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - roboto-origin
  data-classification: public
---

# 导航功能包

> 权威来源（先读原文，再动手）：[导航功能包](https://roboparty.feishu.cn/wiki/SLV0wpyldiWzvfk9qquclhIBnih)

## When to use

当用户的问题涉及「导航,定位,nav2,建图,navigation,避障」时使用本技能。

## Instructions

1. 按《导航功能包》配置 3D 定位与 2D 导航混合架构。
2. 话题/节点名与启动方式引用官方文档。
3. 导航异常先核查传感器（雷达/深度相机）驱动与标定。

## 使用约定

- 涉及版本号、镜像名、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上上方权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接线、烧录、上电类操作：先断电/确认急停，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
