---
title: Highlighter 语法高亮器
atomId: Highlighter
description: 代码高亮组件，基于 Shiki 和 Prism 两种语法高亮引擎封装
group:
  title: 功能组件
---

## Demo

## Shiki 语法高亮器

### JS

<code src="./demos/Highlighter/Shiki"></code>

#### 自定义主题

<code src="./demos/Highlighter/ShikiTheme"></code>

## Prism 语法高亮器

### JS

<code src="./demos/Highlighter/Prism"></code>

:::info
只有包裹在 `DumiSiteProvider` 里面才能正常使用。
:::

## API

| 名称         | 类型                     | 描述                                         |
| ------------ | ------------------------ | -------------------------------------------- |
| children     | string                   | 需要进行语法高亮的文本内容                   |
| language     | `LanguageKeys` 或 string | 语言类型，可以是语言的字符串标识或者枚举类型 |
| type         | `'shiki'` 或 `'prism'`   | 语法高亮器的类型，默认为 `'shiki'`           |
| background   | boolean                  | 是否显示背景容器，默认为 `true`              |
| className    | string                   | 组件的类名                                   |
| trim         | boolean                  | 是否移除前置与后置的空格，默认为 `true`      |
| style        | CSSProperties            | 组件的样式                                   |
| syntaxThemes | `HighlighterSyntaxTheme` | 语法高亮器的主题                             |
| copyable     | boolean                  | 是否可拷贝                                   |

### HighlighterSyntaxTheme

| 名称  | 类型                        | 描述                                     |
| ----- | --------------------------- | ---------------------------------------- |
| shiki | `Partial<ShikiSyntaxTheme>` | Shiki 语法高亮器的主题，为部分属性的对象 |
| prism | `Partial<PrismSyntaxTheme>` | Prism 语法高亮器的主题，为部分属性的对象 |

### ShikiSyntaxTheme

| 名称  | 类型    | 描述                       |
| ----- | ------- | -------------------------- |
| dark  | `Theme` | Shiki 语法高亮器的暗色主题 |
| light | `Theme` | Shiki 语法高亮器的亮色主题 |

### PrismSyntaxTheme

| 名称  | 类型                                     | 描述                       |
| ----- | ---------------------------------------- | -------------------------- |
| dark  | `{ [key: string]: React.CSSProperties }` | Prism 语法高亮器的暗色主题 |
| light | `{ [key: string]: React.CSSProperties }` | Prism 语法高亮器的亮色主题 |
