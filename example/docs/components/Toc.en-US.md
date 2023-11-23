---
title: Table of Contents
atomId: Toc
description: Page directory component
group:
  title: Layout
---

:::info
It can only be used normally when wrapped in `DumiSiteProvider`.
:::

## Demo

<code src="./demos/Toc"></code>

## API

| Name      | Type                          | Description                                                                                                            |
| --------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| items     | `AnchorItem[]`                | List of directory items                                                                                                |
| activeKey | string                        | The key value of the currently active directory item                                                                   |
| onChange  | `(activeKey: string) => void` | Callback function for switching directory items, with the parameter being the key value of the switched directory item |

### AnchorItem

| Name     | Type           | Description                     |
| -------- | -------------- | ------------------------------- |
| id       | string         | The id of the directory item    |
| title    | string         | The title of the directory item |
| children | `AnchorItem[]` | List of child directory items   |
