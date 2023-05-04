---
order: 4
title: SyntaxHighlighter 代码高亮
group: 进阶特性
---

# SyntaxHighlighter 代码高亮

## 主题包内置的代码高亮器

本主题包内建了两种代码高亮器供你使用：

- Prism
- Shiki

**Prism** 是最受欢迎的语法高亮器之一。它在代码文本中插入标签包裹需要高亮的元素并通过 CSS 文件来设置高亮样式。你可以直接使用 [Prism 官方预设的主题](https://github.com/PrismJS/prism-themes)，或者通过 [prism-theme-vars](https://github.com/antfu/prism-theme-vars) 快速创建自己的高亮主题。

**Shiki**，一个基于 TextMate 语法的代码高亮器。它直接生成带样式的包裹元素，所以不需要引入额外的 CSS 文件。因为基于 TextMate 语法，所以生成的高亮区块非常准确，效果类似于 VS Code。同时这也意味着 shiki 可以支持任意 vscode 主题包。Shiki 也提供了 [很多预设主题](https://github.com/shikijs/shiki/blob/main/docs/themes.md)。不过 Shiki 需要通过 TextMate 主题来自定义高亮，这相对来说会比较麻烦。

你自行选择使用哪种高亮器：

- Prism 更容易自定义样式
- Shiki 生成的高亮区块更加准确

默认情况下本主题包使用 shiki，你可以在 frontmatter 中修改设置：

```markdown
---
highlighter: prism
---
```

## shiki 高亮示例

### TSX 高亮

```tsx | pure
import { ReactElement, useMemo } from 'react';

import { useAntdTheme, useThemeMode } from '@/hooks';
import { PedestalProvider, reactCss } from '@/pedestal';
import { Theme } from '@/types';

import type { ThemeProviderProps } from './type';

type TokenContainerProps<T, S = Record<string, string>> = Pick<
  ThemeProviderProps<T, S>,
  'children' | 'customToken' | 'customStylish' | 'prefixCls'
>;

const TokenContainer: <T, S>(props: TokenContainerProps<T, S>) => ReactElement | null = ({
  children,
  customToken: customTokenOrFn,
  customStylish: stylishOrGetStylish,
  prefixCls = 'ant',
}) => {
  const themeState = useThemeMode();
  const { appearance, isDarkMode } = themeState;
  const { stylish: antdStylish, ...token } = useAntdTheme();

  // 获取 自定义 token
  const customToken = useMemo(() => {
    if (customTokenOrFn instanceof Function) {
      return customTokenOrFn({ token, appearance, isDarkMode });
    }

    return customTokenOrFn;
  }, [customTokenOrFn, token, appearance]);

  // 获取 stylish
  const customStylish = useMemo(() => {
    if (!stylishOrGetStylish) return {};

    return stylishOrGetStylish({
      token: { ...token, ...customToken },
      stylish: antdStylish,
      appearance,
      isDarkMode,
      css: reactCss,
    });
  }, [stylishOrGetStylish, token, customToken, antdStylish, appearance]);

  const stylish = useMemo(
    () => ({ ...customStylish, ...antdStylish }),
    [customStylish, antdStylish],
  );

  const theme: Theme = {
    ...token,
    ...customToken,
    stylish,
    ...themeState,
    prefixCls,
  };

  return <PedestalProvider theme={theme}>{children}</PedestalProvider>;
};

export default TokenContainer;
```

### Diff

```diff
// index.tsx
- import './index.less';
+ import useStyles from './style.ts';


const Statistic: React.FC = () => {
+  const { styles } = useStyles();

  //...

  return (
-      <div className={classString} style={style}>
+      <div className={cx(styles, classString)} style={style}>
  // 下面的代码保持不变
  //...
  )}

```
