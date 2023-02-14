/**
 * iframe: 600
 * title: 特性组件 Demo
 * description: 支持用户交互、断点响应
 */

import { DumiSiteProvider, Features } from 'dumi-theme-antd-style';
import { Flexbox } from 'react-layout-kit';

import { antdStyleItems } from './config';

export default () => (
  <DumiSiteProvider>
    <Flexbox padding={24}>
      <Features items={antdStyleItems} />
    </Flexbox>
  </DumiSiteProvider>
);
