---
order: 2
title: Features
description: The feature component on the homepage
atomId: Features
group: Styled Components
---

## Demo

<code src="./demos/Features"></code>

:::info
It can only be used properly when wrapped in `DumiSiteProvider`.
:::

## API

| Property | Description | Type                    | Default     |
| -------- | ----------- | ----------------------- | ----------- |
| items    | Items       | [`Feature[]`](#feature) | `undefined` |
| styles   | Description | `CSSProperties`         | `undefined` |

### Feature

| Property     | Description        | Type      | Default     | Optional |
| ------------ | ------------------ | --------- | ----------- | -------- |
| title        | Title              | `string`  | `undefined` | No       |
| description  | Description        | `string`  | `undefined` | Yes      |
| image        | Image              | `string`  | `undefined` | Yes      |
| row          | Rows               | `number`  | `undefined` | Yes      |
| column       | Columns            | `number`  | `6`         | Yes      |
| openExternal | Open external link | `boolean` |             | Yes      |
