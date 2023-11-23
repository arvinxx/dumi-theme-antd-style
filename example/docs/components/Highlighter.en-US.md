---
title: Highlighter Syntax Highlighter
atomId: Highlighter
description: A code highlighting component that encapsulates two syntax highlighting engines, Shiki and Prism.
group:
  title: Functional Components
---

## Demo

## Shiki Syntax Highlighter

### JS

<code src="./demos/Highlighter/Shiki"></code>

#### Custom Theme

<code src="./demos/Highlighter/ShikiTheme"></code>

## Prism Syntax Highlighter

### JS

<code src="./demos/Highlighter/Prism"></code>

:::info
It can only be used normally when wrapped in `DumiSiteProvider`.
:::

## API

| Name         | Type                     | Description                                                                                   |
| ------------ | ------------------------ | --------------------------------------------------------------------------------------------- |
| children     | string                   | The text content that needs to be syntax highlighted                                          |
| language     | `LanguageKeys` or string | The type of language, which can be a string identifier of the language or an enumeration type |
| type         | `'shiki'` or `'prism'`   | The type of syntax highlighter, default is `'shiki'`                                          |
| background   | boolean                  | Whether to display the background container, default is `true`                                |
| className    | string                   | The class name of the component                                                               |
| trim         | boolean                  | Whether to remove leading and trailing spaces, default is `true`                              |
| style        | CSSProperties            | The style of the component                                                                    |
| syntaxThemes | `HighlighterSyntaxTheme` | The theme of the syntax highlighter                                                           |
| copyable     | boolean                  | Whether it is copyable                                                                        |

### HighlighterSyntaxTheme

| Name  | Type                        | Description                                                              |
| ----- | --------------------------- | ------------------------------------------------------------------------ |
| shiki | `Partial<ShikiSyntaxTheme>` | The theme of Shiki syntax highlighter, as a partial object of properties |
| prism | `Partial<PrismSyntaxTheme>` | The theme of Prism syntax highlighter, as a partial object of properties |

### ShikiSyntaxTheme

| Name  | Type    | Description                                 |
| ----- | ------- | ------------------------------------------- |
| dark  | `Theme` | The dark theme of Shiki syntax highlighter  |
| light | `Theme` | The light theme of Shiki syntax highlighter |

### PrismSyntaxTheme

| Name  | Type                                     | Description                                 |
| ----- | ---------------------------------------- | ------------------------------------------- |
| dark  | `{ [key: string]: React.CSSProperties }` | The dark theme of Prism syntax highlighter  |
| light | `{ [key: string]: React.CSSProperties }` | The light theme of Prism syntax highlighter |
