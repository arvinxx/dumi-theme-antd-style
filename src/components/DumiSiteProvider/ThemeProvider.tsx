import {
  CustomTokenParams,
  ThemeProvider as Provider,
  StyleProvider,
  extractStaticStyle,
} from 'antd-style';
import { ReactNode, useCallback } from 'react';
import { shallow } from 'zustand/shallow';

import { useThemeStore } from '../../store/useThemeStore';
import { createAntdTheme, createCustomToken, getCustomStylish } from '../../styles';
import { SiteConfigToken } from '../../types';

export interface ThemeProviderProps {
  token?: Partial<SiteConfigToken>;
  children?: ReactNode;
  ssrInline?: boolean;
  cache?: typeof extractStaticStyle.cache;
}

export const ThemeProvider = ({ children, token, ssrInline, cache }: ThemeProviderProps) => {
  const [themeMode, colorPrimary, infoColorFollowPrimary, adjustWarning] = useThemeStore(
    (s) => [s.themeMode, s.colorPrimary, s.infoColorFollowPrimary, s.adjustWarning],
    shallow,
  );

  const getCustomToken = useCallback(
    (params: CustomTokenParams) => {
      const base = createCustomToken(params);

      if (token) {
        return { ...base, ...token };
      } else {
        return base;
      }
    },
    [token],
  );

  return (
    <StyleProvider
      speedy={process.env.NODE_ENV === 'production'}
      prefix={'site'}
      cache={cache}
      ssrInline={ssrInline}
    >
      <Provider
        prefixCls={'site'}
        themeMode={themeMode}
        theme={createAntdTheme({
          colorPrimary: colorPrimary,
          infoColorFollowPrimary,
          adjustWarning,
        })}
        customStylish={getCustomStylish}
        customToken={getCustomToken}
      >
        {children}
      </Provider>
    </StyleProvider>
  );
};
