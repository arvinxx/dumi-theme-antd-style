---
order: 1
title: ApiHeader 引用说明
atomId: ApiHeader
description: 简要介绍模块 Api 的头部说明
group: 功能组件
---

## Demo

<code src="./demos/ApiHeader"></code>

:::info
只有包裹在 `DumiSiteProvider` 里面才能正常使用。
:::

## API

| 属性名      | 描述                                 | 类型                               | 默认值      |
| ----------- | ------------------------------------ | ---------------------------------- | ----------- |
| title       | 标题                                 | `string`                           | `undefined` |
| description | 描述                                 | `string`                           | `undefined` |
| actions     | 行动点，第一个 action 默认为 primary | `{ text: string; link: string }[]` | `undefined` |
