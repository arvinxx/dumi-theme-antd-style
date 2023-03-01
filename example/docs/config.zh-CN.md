---
title: 配置
nav:
  title: 配置
  order: 4
---

`dumi-theme-antd-style` 为了更好地满足自定义诉求，增加了一些特有字段，并将其置于 `dumi` 主题配置项 `themeConfig` 字段中，具体配置字段如下：

## 基础配置

### github

- 类型：`string`
- 默认值：`null`

导航栏 Github 图标链接，如不配置该字段，则不展示。

### description

- 类型：`string | Record<string, string>`
- 默认值：`null`

配置首页首屏区域的简介文字。

### actions

- 类型：`IAction[] | Record<string, IAction[]>`
- 默认值：`null`

```ts
interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
}

export default defineConfig({
  themeConfig: {
    // 单语言时配置数组即可
    // actions: [{text: '开始使用', link: '/guide/introduce'}]
    // 多语言时配置对象，key 为语言名
    actions: {
      'zh-CN': [{ text: '开始使用', link: '/guide/introduce' }],
      'en-US': [{ text: 'Start', link: '/guide/introduce-en' }],
    },
  },
});
```

配置首页首屏区域的操作按钮。

### features

- 类型：`IFeature[] | Record<string, IFeature[]>`
- 默认值：`null`

```ts
export default defineConfig({
  themeConfig: {
    // 单语言时配置数组即可
    // features: [{ title: '开箱即用'}, { description: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。'}]
    // 多语言时配置对象，key 为语言名
    features: {
      'zh-CN': [
        { title: '开箱即用' },
        { description: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。' },
      ],
      'en-US': [
        { title: 'Simple Use' },
        {
          description:
            'Simple access, installation and use, fully integrated into Ant Design 5.0 style.',
        },
      ],
    },
  },
});
```

该配置底层使用本主题包的 Feature 组件，详见 [Features](/components/features) 文档。

## 高级配置

### apiHeader

搭配组件文档中的 atomId 字段

- 类型：`ApiHeaderConfig | false`
- 默认值：`undefined`

```ts
interface ApiHeaderConfig {
  pkg: string;
  match?: string[];
  sourceUrl?: string | false;
  docUrl?: string | false;
}

export default defineConfig({
  themeConfig: {
    apiHeader: {
      // 组件库包名，可以从 package.json 中引入名称
      pkg: 'dumi-theme-antd-style',
      // 匹配路由，默认为 /api 或 /components
      match: ['/api', '/components'],
      // github 会匹配 themeConfig.github 字段
      sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
      docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
    },
  },
});
```

sourceUrl 和 docUrl 可以尝试匹配的动态字段有：

- `github`: 在 themeConfig 中配置的 github 字段；
- `atomId`: 在 markdown 文件中标记的 atomId ；
- `title`: 在 markdown 文件中标记的 title 字段 ；

### syntaxTheme

配置代码高亮主题

- 类型：`HighlighterSyntaxTheme`
- 默认值：`undefined`

```ts
// 类型定义
export interface HighlighterSyntaxTheme {
  shiki?: Partial<ShikiSyntaxTheme>;
  prism?: Partial<PrismSyntaxTheme>;
}

export interface ShikiSyntaxTheme {
  dark: Theme;
  light: Theme;
}

export interface PrismSyntaxTheme {
  dark: { [key: string]: React.CSSProperties };
  light: { [key: string]: React.CSSProperties };
}
```

```ts
// 配置方式
import { HighlighterSyntaxTheme } from 'dumi-theme-antd-style';
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default defineConfig({
  themeConfig: {
    syntaxTheme: {
      // shiki 的主题可以直接配置字符串
      shiki: {
        dark: 'dark-plus',
        light: 'github-light',
      },
      // prism 的主题配置需要引入对象
      prism: {
        dark: vscDarkPlus,
        light: vs,
      },
    },
  },
});
```
