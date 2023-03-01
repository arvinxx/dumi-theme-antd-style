import { App } from 'antd';
import { StyleProvider } from 'antd-style';
import { PropsWithChildren } from 'react';

import { ThemeProvider } from './ThemeProvider';

export default ({ children }: PropsWithChildren) => {
  return (
    <StyleProvider speedy={process.env.NODE_ENV === 'production'} prefix={'site'}>
      <ThemeProvider>
        <App>{children}</App>
      </ThemeProvider>
    </StyleProvider>
  );
};

export * from './ThemeProvider';
