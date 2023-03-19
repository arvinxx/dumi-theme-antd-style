import { App } from 'antd';

import { ThemeProvider, ThemeProviderProps } from './ThemeProvider';

export default ({ children, token, ssrInline }: ThemeProviderProps) => {
  return (
    <ThemeProvider token={token} ssrInline={ssrInline}>
      <App>{children}</App>
    </ThemeProvider>
  );
};

export * from './ThemeProvider';
