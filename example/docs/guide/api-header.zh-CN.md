---
title: ApiHeader
description: ApiHeader 可以清楚地呈现出 API 的基础使用方式
order: 10
group: 特性
atomId: Button
apiHeader:
  pkg: antd
  docUrl: https://github.com/ant-design/ant-design/blob/master/components/button/index.zh-CN.md
  sourceUrl: https://github.com/ant-design/ant-design/blob/master/components/button/button.tsx
---

## Api 说明头部

该组件用于展示 API 的基础使用方式，以及 API 的文档地址和源码地址，以便用户快速了解 API 的基础使用方式。

同时提供了一个 `apiHeader` 的配置项，用于配置 API 的文档地址和源码地址。

### 默认使用

通过在 `themeConfig` 中 添加 `apiHeader` 的配置项，即可开启该特性。

详细配置参见：[高级设置 - apiHeader](/config#apiheader)

### frontMatter 配置

如果存在特异性的文档的配置（比如 monorepo、特殊的文件部分），可以在 md 头部添加 `apiHeader` 元数据标记，来声明该组件

```md
---
apiHeader:
  pkg: antd # 引入的组件库
  defaultImport: true # 开启 defaultImport 后，将会使用 import XXX from 'xxx'; 语法
  docUrl: https://github.com/xxx/xxx # 该篇文档的 md 地址
  sourceUrl: https://path/to/soure.tsx # 指向该方法源码的地址
---
```

### 组件化使用

详见：[ApiHeader 引用说明](/components/api-header)
