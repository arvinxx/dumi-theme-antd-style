---
order: 4
title: Code Highlighting
group: Features
---

# SyntaxHighlighter Code Highlighting

## Code Highlighters Built into the Theme Pack

This theme pack provides two built-in code highlighters for you to use:

- Prism
- Shiki

**Prism** is one of the most popular syntax highlighters. It inserts tags into the code text to wrap the elements that need to be highlighted and sets the highlight style through a CSS file. You can use [the themes officially provided by Prism](https://github.com/PrismJS/prism-themes) directly, or quickly create your own highlight theme through [prism-theme-vars](https://github.com/antfu/prism-theme-vars).

**Shiki** is a code highlighter based on TextMate syntax. It directly generates styled wrapping elements, so no additional CSS files are required. Because it is based on TextMate syntax, the generated highlight blocks are very accurate and similar to VS Code. At the same time, this also means that shiki can support any vscode theme pack. Shiki also provides [many preset themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md). However, shiki needs to customize the highlight through TextMate themes, which can be more troublesome.

You can choose which highlighter to use yourself:

- Prism is easier to customize the style
- Shiki generates more accurate highlight blocks

By default, this theme pack uses shiki, and you can modify the settings in frontmatter:

```markdown
---
highlighter: prism
---
```

## shiki Highlight Examples

### TSX Highlighting

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

  // Get custom token
  const customToken = useMemo(() => {
    if (customTokenOrFn instanceof Function) {
      return customTokenOrFn({ token, appearance, isDarkMode });
    }

    return customTokenOrFn;
  }, [customTokenOrFn, token, appearance]);

  // Get stylish
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

  //...
  )}

```
