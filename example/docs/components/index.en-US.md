---
order: 1
title: Overview
apiHeader: false
nav:
  title: Components
  order: 4
---

# Theme Components

From a flexible development perspective, this theme package also provides several key components for theme developers to reuse quickly.

Currently available components are as follows:

| Component        | Description               | Link                         |
| ---------------- | ------------------------- | ---------------------------- |
| Hero             | Header                    | [View](/components/hero)     |
| Features         | Features                  | [View](/components/features) |
| Footer           | Footer                    | [View](/components/Footer)   |
| Toc              | Table of Contents         | [View](/components/Toc)      |
| DumiSiteProvider | Theme container component | [View](/components/Toc)      |

## Usage

If you want to use the components provided by `dumi-theme-antd-style` independently, you need to manually wrap them with `DumiSiteProvider`, for example:

```tsx | pure
import { DumiSiteProvider, Hero } from 'dumi-theme-antd-style';

export default () => (
  <DumiSiteProvider>
    <Hero />
  </DumiSiteProvider>
);
```

But if you are reusing components under `dumi-theme-antd-style`, you do not need to wrap them with `DumiSiteProvider`. The theme package will automatically wrap the document with `DumiSiteProvider`, as detailed in the [source code](https://github.com/arvinxx/dumi-theme-antd-style/blob/master/src/layouts/DocLayout/index.tsx#L58).
