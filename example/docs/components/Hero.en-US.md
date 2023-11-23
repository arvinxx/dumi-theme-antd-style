---
order: 1
title: Hero Header
atomId: Hero
description: Stylized header image
group:
  title: Stylized Components
  order: 2
---

## Demo

<code src="./demos/Hero"></code>

:::info
It can only be used properly when wrapped in `DumiSiteProvider`.
:::

## API

| Property    | Description                                | Type                               | Default     |
| ----------- | ------------------------------------------ | ---------------------------------- | ----------- |
| title       | Title                                      | `string`                           | `undefined` |
| description | Description                                | `string`                           | `undefined` |
| actions     | Action points, the first action is default | `{ text: string; link: string }[]` | `undefined` |
