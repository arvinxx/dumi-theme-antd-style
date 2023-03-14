import { App } from 'antd';
import { StyleProvider } from 'antd-style';

import { ThemeProvider, ThemeProviderProps } from './ThemeProvider';

export default ({ children, token }: ThemeProviderProps) => {
  return (
    <StyleProvider speedy={process.env.NODE_ENV === 'production'} prefix={'site'}>
      <ThemeProvider token={token}>
        <App>{children}</App>
      </ThemeProvider>
    </StyleProvider>
  );
};

export * from './ThemeProvider';
