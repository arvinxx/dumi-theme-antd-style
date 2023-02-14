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

### sidebarGroupModePath

- 类型：`Array<string | RegExp>`
- 默认值：`[]`

```ts
export default {
  themeConfig: {
    antdTheme: {
      sidebarGroupModePath: [
        // 匹配以 /config 开头的路由
        '/config',
        // 支持正则匹配
        /\/guide\//,
      ],
    },
  },
};
```

左侧导航栏是否需要作为分组处理，参考 antd [menuitemgrouptype][antd-menuitemgrouptype-url]。

[antd-menuitemgrouptype-url]: https://ant.design/components/menu-cn#menuitemgrouptype---
