/**
 * title: 自定义主题
 * description: 自定义了暗色和亮色模式下的高亮效果
 */
import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';

const text = `
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
`;

export default () => (
  <DumiSiteProvider>
    <Highlighter
      language={'tsx'}
      syntaxThemes={{
        shiki: {
          dark: 'dark-plus',
        },
      }}
    >
      {text}
    </Highlighter>
  </DumiSiteProvider>
);
