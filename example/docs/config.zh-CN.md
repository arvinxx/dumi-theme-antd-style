---
title: 配置
nav:
  title: 配置
  order: 4
---

# 主题配置

`dumi-theme-antd-style` 为了更好地满足自定义诉求，增加了一些特有字段，并将其置于 `dumi` 主题配置项 `themeConfig` 字段中，具体配置字段如下：

## 基础配置

### name

- 类型：`string`
- 默认值：`null`

网站名称

### logo

- 类型：`string`
- 默认值：`null`

网站 logo 图片链接

### github

- 类型：`string`
- 默认值：`null`

导航栏 Github 图标链接，如不配置该字段，则不展示。

### hero

- 类型：`IHero | Record<string, IHero>`
- 默认值：`null`

LP 头部展示，会将配置项透传到 [Hero 组件](/components/hero) 。

如果不配置该字段，则会兜底使用 `index.md` 中的 hero 字段。

```ts
export default defineConfig({
  themeConfig: {
    // 单语言时配置数组即可
    // hero: { title: 'Ant Design Style', description: 'Ant Design Style' },
    // 多语言时配置对象，key 为语言名
    hero: {
      'zh-CN': {
        title: 'Ant Design Style',
        description: 'Ant Design Style',
      },
      'en-US': {
        title: 'Ant Design Style',
        description: 'Ant Design Style',
      },
    },
  },
});
```

#### hero.description

- 类型：`string | Record<string, string>`
- 默认值：`null`

配置首页首屏区域的简介文字。

#### hero.actions

- 类型：`IAction[]`
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
    hero: {
      actions: [{ text: '开始使用', link: '/guide/introduce' }],
    },
  },
});
```

配置首页首屏区域的操作按钮。

#### hero.features

- 类型：`IFeature[]`
- 默认值：`null`

该配置底层使用本主题包的 Feature 组件，详见 [Features](/components/features) 文档。

```ts
export default defineConfig({
  themeConfig: {
    hero: {
      features: [
        { title: '开箱即用' },
        { description: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格。' },
      ],
    },
  },
});
```

### footer

- 类型：`string | false`
- 默认值：`null`

网站页脚，如果配置为 false ，将完全关闭 footer。

### footerConfig

- 类型：`IFooter`
- 默认值：`null`

网站页脚的完整配置，会将配置项透传到 [Footer 组件](/components/footer) 。

`IFooter` 详细配置如下：

| 名称    | 类型                      | 描述                         |
| ------- | ------------------------- | ---------------------------- |
| bottom  | string                    | 底部内容                     |
| theme   | `dark`、 `light`          | 主题，可选值为 dark 或 light |
| columns | `FooterColumn[]`/ `false` | 列配置                       |

## 高级配置

### apiHeader

- 类型：`ApiHeaderConfig | false`
- 默认值：`null`

API 文档页头部配置

搭配组件文档中的 atomId 字段

- 类型：`ApiHeaderConfig | false`
- 默认值：`undefined`

```ts
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

其中 `ApiHeaderConfig` 的配置如下：

| 名称      | 类型               | 描述                                                                |
| --------- | ------------------ | ------------------------------------------------------------------- |
| pkg       | string             | 组件库包名，可以从 package.json 中引入名称                          |
| match     | string[]           | ApiHeader 组件的匹配路由，默认为 ["/api", "/components"]            |
| sourceUrl | `string` / `false` | 点击 ApiHeader 组件的源代码链接跳转的地址，如果不需要链接则为 false |
| docUrl    | `string` / `false` | 点击 ApiHeader 组件的文档链接跳转的地址，如果不需要链接则为 false   |

`sourceUrl` 和 `docUrl` 可以尝试匹配的动态字段有：

- `github`: 在 themeConfig 中配置的 `github` 字段；
- `atomId`: 在 markdown 文件中标记的 `atomId` ；
- `title`: 在 markdown 文件中标记的 `title` 字段 ；

### syntaxTheme

- 类型：`HighlighterSyntaxTheme`
- 默认值：`null`

代码高亮主题配置

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
