/**
 * iframe: 600
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
