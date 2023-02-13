/**
 * iframe: 600
 */
import { DumiSiteProvider, Hero } from 'dumi-theme-antd-style';
import { Center } from 'react-layout-kit';

export default () => (
  <DumiSiteProvider>
    <Center style={{ height: 600 }}>
      <Hero
        title={'Ant Design <b>Style</b>'}
        actions={[
          { text: '主按钮', link: '/components/hero' },
          { text: '辅助按钮', link: '/' },
        ]}
        description={'炫酷的 Hero 头部组件'}
      />
    </Center>
  </DumiSiteProvider>
);
