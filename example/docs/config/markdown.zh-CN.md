---
title: 文档配置
nav: 配置
---

# 文档配置

在 dumi 默认的 [MarkDown 配置](https://d.umijs.org/config/markdown)上，额外增加了一些字段，以满足更多的自定义需求。

## apiHeader

示例

```md
---
apiHeader:
  pkg: antd # 引入的组件库
  defaultImport: true # 开启 defaultImport 后，将会使用 import XXX from 'xxx'; 语法
  docUrl: https://github.com/xxx/xxx # 该篇文档的 md 地址
  sourceUrl: https://path/to/soure.tsx # 指向该方法源码的地址
---
```

字段表格

| 字段名        | 说明                   | 默认值         | 示例                       |
| ------------- | ---------------------- | -------------- | -------------------------- |
| pkg           | 引入的组件库           | `package.name` | antd                       |
| defaultImport | 是否开启 defaultImport | `false`        | -                          |
| docUrl        | 该篇文档的 md 地址     | -              | https://github.com/xxx/xxx |
| sourceUrl     | 指向该方法源码的地址   | -              | https://path/to/soure.tsx  |

## token

token 配置字段用于在文档中使用 token 控制文档的内容尺寸展示。

```md
---
title: Theme 主题
token:
  contentMaxWidth: 1440
  sidebarWidth: 200
---
```

支持的 token 列表如下：

| 属性名          | 类型     | 默认值 | 描述         |
| --------------- | -------- | ------ | ------------ |
| footerHeight    | `number` | `300`  | 网站底部高度 |
| sidebarWidth    | `number` | `240`  | 侧边栏宽度   |
| tocWidth        | `number` | `176`  | 目录宽度     |
| contentMaxWidth | `number` | `1152` | 内容最大宽度 |

## codePlacement
