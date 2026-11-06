---
name: rp1-deploy
description: Deploy RP1 with the ROS2 Jazzy framework: modular imu/motor/dexhand/inference/camera packages; current target RoboPi2 (RK3588). Triggers: 部署,ROS2,Jazzy,Humble,imu,motor,dexhand,inference,camera,deploy.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 ROS2 部署

> 权威来源（先读原文，再动手）：RP1 在役部署源 `rp1_deploy`（本组合 `roboparty_repo` 内，未公开）；公开参考：[roboparty_deploy](https://github.com/Roboparty/roboparty_deploy)（RPO/Roboto，ROS2 Humble）。

## 相关仓库

- RP1 在役部署源 `rp1_deploy`（本组合 `roboparty_repo` 内，未公开；板卡实测 ROS 2 Jazzy）
- [Roboparty/roboparty_deploy](https://github.com/Roboparty/roboparty_deploy) —— 公开的 RPO/Roboto 部署框架（ROS2 Humble）
- [Roboparty/roboparty_repo](https://github.com/Roboparty/roboparty_repo) —— 整机组合入口

## When to use

当用户的问题涉及「部署,ROS2,Humble,imu,motor,dexhand,inference,camera,deploy」时使用本技能。

## Instructions

1. rp1_deploy 提供模块化 ROS2（Jazzy）部署，imu/motor/dexhand/inference/camera 可独立扩展（公开同类参考仓 roboparty_deploy 为 RPO/Roboto，ROS2 Humble）。
2. 整机现行目标平台为 RoboPi2（RK3588）；节点名/启动方式以仓库 README 为准。
3. 部署前确认镜像、固件与驱动版本匹配；本机 ROS 发行版为 Jazzy（非 Humble）。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `search_docs` / `get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
