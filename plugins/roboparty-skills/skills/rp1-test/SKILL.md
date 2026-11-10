---
name: rp1-test
description: Use RP1 test assets: test cases, bench architecture, electrical connection guide, host software, and test database. Triggers: 测试,测试用例,台架,上位机,测试数据库,MTBF,rp1_test.
version: 0.1.0
metadata:
  author: RoboParty
  tags:
    - roboparty
    - rp1
  data-classification: public
---

# RP1 测试资料

> 权威来源（先读原文，再动手）：[RP1 测试资料](https://github.com/Roboparty/rp1_test)

## 相关仓库

- `Roboparty/rp1_test` —— 私有，无权限时找袁敬博开通

## When to use

当用户的问题涉及「测试,测试用例,台架,上位机,测试数据库,MTBF,rp1_test」时使用本技能。

## Instructions

1. rp1_test 含测试用例、台架架构、电气连接指导、上位机与测试数据库。
2. 仓库权限不足时联系维护者；资料见飞书。
3. 按测试用例逐项执行并记录，结论不超过实测范围。

## 使用约定

- 涉及版本号、型号、针脚、包名、API、参数时，先用 roboparty-docs MCP 的 `docs_search_docs` / `docs_get_page` 核对官方原文，**不要凭记忆编造**。
- 用原文内容回答，并附上权威来源链接。
- 每个问题最多打开 1–2 篇文档。

## Safety

- 接电、上电、总线、固件类操作：先确认急停/断电，核对电压与接口，必要时让用户确认后再执行。
- 只读排查优先；任何可能改变设备状态的动作，执行前说明影响。
