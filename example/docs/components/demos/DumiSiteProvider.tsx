/**
 * iframe: 460
 */
import { useAntdTheme, useTheme } from 'antd-style';
import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';
import { omit } from 'lodash';
import { Flexbox } from 'react-layout-kit';

const App = () => {
  const antdTheme = useAntdTheme();
  const theme = useTheme();
  const siteTheme = omit(theme, Object.keys(antdTheme));
  const json = JSON.stringify(siteTheme, null, 2);
  return (
    <Flexbox padding={16} gap={16}>
      DumiSiteProvider 主题配置：
      <Highlighter language={'json'}>{json}</Highlighter>
    </Flexbox>
  );
};

export default () => (
  <DumiSiteProvider>
    <App />
  </DumiSiteProvider>
);
