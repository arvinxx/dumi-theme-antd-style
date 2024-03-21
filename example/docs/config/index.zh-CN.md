---
title: 主题配置
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

#### hero.showCustomContent

- 类型：`boolean`
- 默认值：`false`

是否展示自定义内容。首页默认不会展示 markdown 文件中的内容，如果需要展示，可以配置该字段为 `true`。

### footer

- 类型：`string | false`
- 默认值：`null`

网站页脚，如果配置为 false ，将完全关闭 footer。

### footerConfig

- 类型：`IFooter`
- 默认值：`null`

网站页脚的完整配置，会将配置项透传到 [Footer 组件](/components/footer) 。

`IFooter` 详细配置如下：

| 名称      | 类型                      | 描述                         |
| --------- | ------------------------- | ---------------------------- |
| bottom    | string                    | 底部内容                     |
| copyright | string                    | 版权信息                     |
| theme     | `dark`、 `light`          | 主题，可选值为 dark 或 light |
| columns   | `FooterColumn[]`/ `false` | 列配置                       |

### socialLinks

与 dumi 保持一致。

### socialLinks.github

- 类型：`string`
- 默认值：`null`

导航栏 Github 图标链接，如不配置该字段，则不展示。

### hideHomeNav

- 类型：`boolean`
- 默认值：`false`

是否隐藏首页的 nav tab，配置为 `true` 则不展示首页的 nav。

### hideNameOnHeader

- 类型：`boolean`
- 默认值：`false`

在[某些场景下](https://github.com/arvinxx/dumi-theme-antd-style/issues/116), 会需要隐藏 header 中的 name 部分，可以通过配置该字段为 `true` 来实现。

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
- `atomId.${'camel' | 'kebab' | 'snake' | 'pascal' }`: 在 markdown 文件中标记的 `atomId` ；
  - kebab：小写加中划线；例如 {atomId.kebab}, atomId 设为 test-atomId，实际转换为 test-atom-id
  - camel：小驼峰；例如 {atomId.camel}, atomId 设为 test-atomId，实际转换为 testAtomId
  - snake：小写加下划线；例如 {atomId.snake}, atomId 设为 test-atomId，实际转换为 test_atom_id
  - pascal：大驼峰；例如 {atomId.pascal}, atomId 设为 test-atomId，实际转换为 TestAtomId
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

### siteToken

- 类型：`SiteConfigToken`
- 默认值：`undefined`

网站主题 Token 配置，该配置会传递给 [DumiSiteProvider](/components/dumi-site-provider) 组件。

```ts
// 默认值
export default defineConfig({
  themeConfig: {
    siteToken: {
      headerHeight: 64,
      footerHeight: 300,
      sidebarWidth: 240,
      tocWidth: 176,
      contentMaxWidth: 1152,
      demoInheritSiteTheme: false, // 默认的 demo 主题不会跟随网站主题变化
    },
  },
});
```

token 介绍如下：

| 属性名               | 类型      | 默认值  | 描述                       |
| -------------------- | --------- | ------- | -------------------------- |
| headerHeight         | `number`  | `64`    | 网站头部高度               |
| footerHeight         | `number`  | `300`   | 网站底部高度               |
| sidebarWidth         | `number`  | `240`   | 侧边栏宽度                 |
| tocWidth             | `number`  | `176`   | 目录宽度                   |
| contentMaxWidth      | `number`  | `1152`  | 内容最大宽度               |
| demoInheritSiteTheme | `boolean` | `false` | 让 demo 主题跟随站点的主题 |

### demo

#### demo.lazyLoading

demo 支持懒加载，如果文档的 demo 量很大，可以开启以提升文档加载性能。

- 类型：`boolean`
- 默认值：`false`
