---
title: Custom Footer
order: 2
group:
  title: Configuration
  order: 4
---

# Custom Footer

Based on dumi's good theme architecture, we can easily customize the Footer of our site.

The Footer in this theme package is based on [rc-footer](https://github.com/react-component/footer) encapsulation. Therefore, this Footer component can support icons and other React components. This makes it impossible to configure the Footer column in the `themeConfig` and requires custom props to be passed into the Footer component.

Create a `.dumi/theme/slots` directory in your project and then create a `Footer` component in that directory with the following content:

```tsx | pure
//.dumi/theme/slots/Footer/index.tsx

import { Footer } from 'dumi-theme-antd-style';

export default () => {
  return <Footer bottom={'Customized'} />;
};
```

The resulting code block looks like this:

```tsx
import { Footer } from 'dumi-theme-antd-style';

export default () => {
  return <Footer bottom={'Customized'} />;
};
```

If you need to customize the columns, please refer to the Footer [source code](https://github.com/arvinxx/dumi-theme-antd-style/blob/master/src/slots/Footer/index.tsx) reference in this theme.
