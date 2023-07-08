---
title: Config
nav:
  title: Config
  order: 4
---

`dumi-theme-antd-style` For better customizability, some special fields are added, and they are placed in the `themeConfig` field of the `dumi` theme configuration item. The specific configuration fields are as follows:

## Basic Config

### github

- type: `string`
- default: `null`

The navigation bar Github icon link, if this field is not configured, it will not be displayed.

### description

- type: `string | Record<string, string>`
- default: `null`

配置首页首屏区域的简介文字。

### actions

- type: `IAction[] | Record<string, IAction[]>`
- default: `null`

```ts
interface IAction {
  /** 按钮文字描述 */
  text: string;
  /** 按钮链接 */
  link: string;
}

export default defineConfig({
  themeConfig: {
    // actions: [{text: '开始使用', link: '/guide/introduce'}]

    actions: {
      'zh-CN': [{ text: '开始使用', link: '/guide/introduce' }],
      'en-US': [{ text: 'Start', link: '/guide/introduce-en' }],
    },
  },
});
```

配置首页首屏区域的操作按钮。

### features

- type: `IFeature[] | Record<string, IFeature[]>`
- default: `null`

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

- type: `ApiHeaderConfig | false`
- default: `undefined`

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
- `atomId.${'camel' | 'kebab' | 'snake' | 'pascal' }`: 在 markdown 文件中标记的 `atomId` ；
  - kebab：小写加中划线；例如 {atomId.kebab}, atomId 设为 test-atomId，实际转换为 test-atom-id
  - camel：小驼峰；例如 {atomId.camel}, atomId 设为 test-atomId，实际转换为 testAtomId
  - snake：小写加下划线；例如 {atomId.snake}, atomId 设为 test-atomId，实际转换为 test_atom_id
  - pascal：大驼峰；例如 {atomId.pascal}, atomId 设为 test-atomId，实际转换为 TestAtomId
- `title`: 在 markdown 文件中标记的 title 字段 ；
