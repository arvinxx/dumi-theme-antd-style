---
title: Toc 目录
atomId: Toc
description: 页面目录组件
group:
  title: 布局
---

:::info
只有包裹在 `DumiSiteProvider` 里面才能正常使用。
:::

## Demo

<code src="./demos/Toc"></code>

## API

| 名称      | 类型                          | 描述                                              |
| --------- | ----------------------------- | ------------------------------------------------- |
| items     | `AnchorItem[]`                | 目录项列表                                        |
| activeKey | string                        | 当前激活的目录项 key 值                           |
| onChange  | `(activeKey: string) => void` | 目录项切换的回调函数，参数为切换后的目录项 key 值 |

### AnchorItem

| 名称     | 类型           | 描述         |
| -------- | -------------- | ------------ |
| id       | string         | 目录项的 id  |
| title    | string         | 目录项的标题 |
| children | `AnchorItem[]` | 子目录项列表 |
