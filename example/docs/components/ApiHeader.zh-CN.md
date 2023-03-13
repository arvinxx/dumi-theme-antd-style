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

| 名称          | 类型            | 描述                             |
| ------------- | --------------- | -------------------------------- |
| title         | string          | ApiHeader 组件的标题             |
| pkg           | string          | ApiHeader 组件所在的包名         |
| defaultImport | boolean         | 是否默认导入组件，默认为 `false` |
| description   | string          | ApiHeader 组件的描述信息         |
| sourceUrl     | string          | ApiHeader 组件源代码的链接       |
| docUrl        | string          | ApiHeader 组件文档的链接         |
| componentName | string          | ApiHeader 组件的名称             |
| serviceList   | `ServiceItem[]` | 可选，若存在则展示 API 服务列表  |

### ServiceItem

| 名称     | 类型      | 描述     |
| -------- | --------- | -------- |
| label    | string    | 服务标签 |
| icon     | ReactNode | 服务图标 |
| children | string    | 服务描述 |
| url      | string    | 服务链接 |
