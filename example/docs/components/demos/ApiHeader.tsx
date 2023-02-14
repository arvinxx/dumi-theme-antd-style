/**
 * iframe: true
 */
import { ApiHeader, DumiSiteProvider } from 'dumi-theme-antd-style';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <DumiSiteProvider>
    <Flexbox padding={24}>
      <ApiHeader
        title={'Button 按钮'}
        pkg={'antd'}
        componentName={'Button'}
        description={'Ant Design 的按钮'}
        docsUrl={'https://ant.design/components/button-cn'}
        sourceUrl={
          'https://github.com/ant-design/ant-design/blob/master/components/button/index.ts'
        }
      />
    </Flexbox>
  </DumiSiteProvider>
);
