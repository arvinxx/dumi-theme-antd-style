---
order: 1
title: ApiHeader Reference
atomId: ApiHeader
description: Brief introduction to the header of module Api
group: Functional Components
---

## Demo

<code src="./demos/ApiHeader"></code>

:::info
It can only be used normally when wrapped in `DumiSiteProvider`.
:::

## API

| Name          | Type            | Description                                                    |
| ------------- | --------------- | -------------------------------------------------------------- |
| title         | string          | Title of the ApiHeader component                               |
| pkg           | string          | Package name where the ApiHeader component resides             |
| defaultImport | boolean         | Whether to import the component by default, default is `false` |
| description   | string          | Description of the ApiHeader component                         |
| sourceUrl     | string          | Link to the source code of the ApiHeader component             |
| docUrl        | string          | Link to the documentation of the ApiHeader component           |
| componentName | string          | Name of the ApiHeader component                                |
| serviceList   | `ServiceItem[]` | Optional, if exists, display the list of API services          |

### ServiceItem

| Name     | Type      | Description         |
| -------- | --------- | ------------------- |
| label    | string    | Service label       |
| icon     | ReactNode | Service icon        |
| children | string    | Service description |
| url      | string    | Service link        |
