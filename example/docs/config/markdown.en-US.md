---
title: Document Configuration
nav: Configuration
---

# Document Configuration

In addition to the default [MarkDown configuration](https://d.umijs.org/config/markdown) of dumi, some additional fields have been added to meet more customization needs.

## apiHeader

Example

```md
---
apiHeader:
  pkg: antd # Imported component library
  defaultImport: true # When defaultImport is enabled, it will use the import XXX from 'xxx'; syntax
  docUrl: https://github.com/xxx/xxx # The markdown address of this document
  sourceUrl: https://path/to/soure.tsx # Points to the source code of this method
---
```

Field Table

| Field Name    | Description                              | Default Value  | Example                      |
| ------------- | ---------------------------------------- | -------------- | ---------------------------- |
| pkg           | Imported component library               | `package.name` | antd                         |
| defaultImport | Whether to enable defaultImport          | `false`        | -                            |
| docUrl        | The markdown address of this document    | -              | <https://github.com/xxx/xxx> |
| sourceUrl     | Points to the source code of this method | -              | <https://path/to/soure.tsx>  |

## token

The token configuration field is used to control the content size display in the document using tokens.

```md
---
title: Theme 主题
token:
  contentMaxWidth: 1440
  sidebarWidth: 200
---
```

The supported token list is as follows:

| Property Name   | Type     | Default Value | Description           |
| --------------- | -------- | ------------- | --------------------- |
| footerHeight    | `number` | `300`         | Website footer height |
| sidebarWidth    | `number` | `240`         | Sidebar width         |
| tocWidth        | `number` | `176`         | Directory width       |
| contentMaxWidth | `number` | `1152`        | Maximum content width |

## codePlacement
