import { StyleProvider, ThemeProvider as Provider } from 'antd-style';
import { PropsWithChildren } from 'react';

import { useThemeStore } from '../../store/useThemeStore';
import { getAntdTheme, getCustomStylish, getCustomToken } from '../../styles';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const themeMode = useThemeStore((s) => s.themeMode);

  return (
    <StyleProvider speedy={process.env.NODE_ENV === 'production'} prefix={'site'}>
      <Provider
        prefixCls={'site'}
        themeMode={themeMode}
        theme={getAntdTheme}
        customStylish={getCustomStylish}
        customToken={getCustomToken}
      >
        {children}
      </Provider>
    </StyleProvider>
  );
};
