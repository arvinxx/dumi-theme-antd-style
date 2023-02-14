---
order: 2
title: Features 特性
description: 首页的特性组件
atomId: Features
group: 风格化组件
---

## Demo

<code src="./demos/Features"></code>

:::info
只有包裹在 `DumiSiteProvider` 里面才能正常使用。
:::

## API

| 属性名 | 描述 | 类型                    | 默认值      |
| ------ | ---- | ----------------------- | ----------- |
| items  | 项   | [`Feature[]`](#feature) | `undefined` |
| styles | 描述 | `CSSProperties`         | `undefined` |

### Feature

| 属性名      | 描述 | 类型     | 默认值      | 是否可选 |
| ----------- | ---- | -------- | ----------- | -------- |
| title       | 标题 | `string` | `undefined` |          |
| description | 描述 | `string` | `undefined` | 可选     |
| image       | 图片 | `string` | `undefined` | 可选     |
| row         | 行数 | `number` | `undefined` | 可选     |
| column      | 列数 | `number` | `6`         | 可选     |
