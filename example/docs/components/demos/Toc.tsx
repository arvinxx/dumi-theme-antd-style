/**
 * iframe: 380
 */
import { DumiSiteProvider, Toc } from 'dumi-theme-antd-style';
import { Flexbox } from 'react-layout-kit';

const items = [
  {
    id: '1-亮暗色主题切换',
    depth: 2,
    title: '1. 亮暗色主题切换',
  },
  {
    id: '2-自动响应系统主题',
    depth: 2,
    title: '2. 自动响应系统主题',
    children: [
      {
        id: 'docs-guide-switch-theme-demo-autoswitch',
        depth: 3,
        title: '自动响应系统主题',
      },
    ],
  },
  {
    id: '3-受控模式的主题切换',
    depth: 2,
    title: '3. 受控模式的主题切换',
    children: [
      {
        id: 'docs-guide-switch-theme-demo-controlledswitch',
        depth: 3,
        title: '受控模式下的主题切换',
      },
    ],
  },
  {
    id: '4-结合-theme-配置进行主题自定义',
    depth: 2,
    title: '4. 结合 theme 配置进行主题自定义',
    children: [
      {
        id: 'docs-guide-switch-theme-demo-antdtheme',
        depth: 3,
        title: '传入 Antd Theme 主题',
      },
    ],
  },
  {
    id: 'api',
    depth: 2,
    title: 'API',
  },
];

export default () => (
  <DumiSiteProvider>
    <Flexbox padding={40}>
      <Toc items={items} />
    </Flexbox>
  </DumiSiteProvider>
);
