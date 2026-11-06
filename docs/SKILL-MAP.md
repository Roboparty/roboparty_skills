# RoboParty Skills 技能地图

面向 Roboto Origin（萝博头原型机）开源双足人形机器人的 Agent 技能清单。
每个技能都是一份 `SKILL.md`，教 AI 编码助手如何按官方文档完成特定任务。

> 技能内容引用官方文档；实际版本号、镜像、针脚、参数以
> [文档中心](https://roboparty.com/roboto_origin/doc) 原文为准。

## 入门指引

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-introduction` | 了解产品与文档阅读顺序 | 基本介绍与阅读须知 |

## 安全规范

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-safety-guide` | 开关机、急停、安全调试、吊架要求 | 安全操作指南 V1.1.1 |

## 烧录与固件

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-burn-flash` | RDK X5 镜像烧录、零点标定、首次启动 | RDKx5烧录及零点标定与启动 |
| `rpo-stm32-firmware` | STM32CubeProg 烧录 USB 转 CANFD 固件 | STM32CubeProg 烧录说明 |

## 装配与标定

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-assembly` | 散件装配流程索引 | 装配与标定 / RPO 视频组装教程 |
| `rpo-zero-calibration` | 圆柱销（零点）标定 | 圆柱销标定方案 |
| `rpo-wiring` | 电源线/信号线走线 | 走线说明 |

## 硬件与电气

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-hardware-electrical` | 供电、接口、三合一电路 | 硬件与电气 / 三合一电路硬件说明 |
| `rpo-motor-debug` | 达妙电机逐步调试、MIT 参数 | 达妙电机保姆级调试流程 |
| `rpo-industrial-design` | 外观、壳体、结构/外壳分离 | 工业设计 |
| `rpo-bom-parts` | 散件清单（BOM）、复刻备件 | 散件清单 V1.1.3 |

## 嵌入式软件

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-embedded-software` | 固件、主控、通信软件结构 | 嵌入式软件 |

## 算法与软件

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-motion-control` | 运控链路、实时控制、步态调试 | 人形机器人运动控制 Know-How |
| `rpo-rl-training` | IsaacLab/RSL-RL 训练、Sim2Sim | 强化学习训练 |
| `rpo-navigation` | 3D 定位 + 2D 导航混合架构 | 导航功能包 |

## 部署与 SDK

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-deploy-sdk` | ROS2 部署、推理、手柄/Python SDK | 部署与 SDK |

## 开源与社区

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-community-contributing` | 社区规范与贡献指南 | 社区规范与贡献指南 |
| `rpo-license` | 开源许可与二次开发协议 | 开源许可与二次开发协议 V1.0.2 |

## 服务与支持

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rpo-qa` | 常见问题官方答案 | 常见 QA |
| `rpo-after-sales` | 保修、售后、返修流程 | 保修和售后政策 V1.0 |

---

# RP1 技能（全尺寸开源人形）

> RP1 事实与参数以《RP1 Tech Report v0.8.12》为权威骨架；标注「待验证」的参数
> 不要写成已确认性能。

## RP1 总览

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rp1-overview` | 产品定位、技术报告总览 | RP1 Tech Report v0.8.12 |
| `rp1-safety` | 整机安全、接电要求、急停 | Tech Report 安全章节 / SAFETY.md |
| `rp1-prd` | RP1.4 功能与生态需求 | RP1.4 PRD V2.0 |

## RP1 硬件电气

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rp1-hardware-architecture` | 六层硬件架构、5 路 CAN-FD | Tech Report 2.2 |
| `rp1-electrical-power` | 48V+30V 热插拔双电源、上电时序 | Tech Report 2.2 |
| `rp1-canfd-bus` | CAN-FD 拓扑、USB 转 CANFD、gs_usb、HPM 网关 | roboparty_stm32_usbcan / Tech Report 2.5–2.6 |
| `rp1-motor` | 关节模组/电机（ROMOMO、雷赛、达妙）调试 | roboparty_motors |

## RP1 机械结构

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rp1-mechanism` | 抱箍、踝并联连杆、中空走线、躯干热插拔 | Tech Report 2.3 |

## RP1 嵌入式固件

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rp1-main-controller` | RK3588+实时 MCU 异构、Armbian、PREEMPT_RT | Tech Report 2.4 |
| `rp1-bsp-firmware` | 插件化 BSP、.deb、镜像构建、OTA | roboparty_build |

## RP1 模型部署

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rp1-description` | URDF/MJCF（full、24dof、flat/rough） | rp1_description |
| `rp1-deploy` | ROS2 Humble 五大模块部署 | roboparty_deploy |
| `rp1-dexhand` | RP_Hand 6DOF 驱动 | roboparty_dexhand |
| `rp1-navigation` | 定位、建图、避障 | roboparty_navigation |
| `rp1-joystick-teleop` | 手柄/手机 app、XR 遥操 | roboparty_xr_teleop |

## RP1 算法训练

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rp1-rl-training` | IsaacLab/RSL-RL 训练、AMP/Parkour、Sim2Sim | roboparty_train |
| `rp1-mimic-dance` | BeyondMimic/MimicLite 动作模仿与舞蹈 | MimicLite |
| `rp1-bfm` | UFO/P-BFM/I-BFM 行为基础模型 | UFO |

## RP1 测试开源

| 技能 | 作用 | 权威来源 |
| --- | --- | --- |
| `rp1-test` | 测试用例、台架、上位机、测试数据库 | rp1_test（可能私有） |
| `rp1-hardware-open` | Docs/Mechanic/PCB/Harness/BOM 硬件开源包 | rp1_hardware（可能私有） |

> 私有仓库（rp1_hardware、rp1_test）无权限时找袁敬博开通，加入 RoboParty 组织。

## 与 roboparty-docs-mcp 的关系

`roboparty-docs-mcp` 的 `search_skills` / `get_skill` 工具读取本仓库生成的
`skills/skill-index.json`，让 Agent 在动手前先发现合适技能。两者配合：
**先发现技能 → 用文档 MCP 核对原文 → 按技能步骤执行。**
