---
title: Footer
order: 2
group: 自定义
---

# 自定义 Footer

基于 dumi 良好的主题架构，我们可以很方便的自定义站点的 Footer。

本主题包中的 Footer 基于 [rc-footer](https://github.com/react-component/footer) 封装，因此该 Footer 组件可以支持图标等 react 组件，这就使得 footer column 的配置项无法做在 themeConfig 中，需要自行引入 Footer 组件传 props 定制。

在你的项目中新建 `.dumi/theme/slots` 目录，然后在该目录下新建 `Footer` 组件，内容如下：

```tsx | pure
//.dumi/theme/slots/Footer/index.tsx

import { Footer } from 'dumi-theme-antd-style';

export default () => {
  return <Footer bottom={'自定义'} />;
};
```

呈现结果如下：

```tsx
import { Footer } from 'dumi-theme-antd-style';

export default () => {
  return <Footer bottom={'自定义'} />;
};
```

如需自定义 columns ，可查阅：[本主题站点](https://github.com/arvinxx/dumi-theme-antd-style/blob/master/src/slots/Footer/index.tsx) 的 Footer 配置参考。
