import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';

const text = `import { DumiSiteProvider, Highlighter } from 'dumi-theme-antd-style';`;

export default () => (
  <DumiSiteProvider>
    <Highlighter language={'js'}>{text}</Highlighter>
  </DumiSiteProvider>
);
