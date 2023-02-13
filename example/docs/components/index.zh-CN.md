---
order: 1
title: 概览
nav:
  title: 组件
  order: 3
---

# 主题组件

从灵活开发角度考虑，本主题包同样提供了几个重点组件，供主题开发者快速复用。

目前提供的组件如下：

| 组件             | 描述         | 链接                         |
| ---------------- | ------------ | ---------------------------- |
| Hero             | 头图         | [查看](/components/hero)     |
| Features         | 特性         | [查看](/components/features) |
| Footer           | 页脚         | [查看](/components/Footer)   |
| Toc              | 目录         | [查看](/components/Toc)      |
| DumiSiteProvider | 主题容器组件 | [查看](/components/Toc)      |

## 使用

如果你希望独立使用 `dumi-theme-antd-style` 所提供的组件，你需要手动在外层包裹一次 `DumiSiteProvider`，例如：

```tsx | pure
import { DumiSiteProvider, Hero } from 'dumi-theme-antd-style';

export default () => (
  <DumiSiteProvider>
    <Hero />
  </DumiSiteProvider>
);
```

但如果你是在 `dumi-theme-antd-style` 下复用组件，则不需要包裹 `DumiSiteProvider`， 主题包中会自动为文档包裹一层 `DumiSiteProvider`，详见[源码](https://github.com/arvinxx/dumi-theme-antd-style/blob/master/src/layouts/DocLayout/index.tsx#L58)。
