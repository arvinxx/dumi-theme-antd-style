import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { contentBottomSel, useSiteStore } from '../../store';

import Linker from './Linker';

const ContentFooter = () => {
  const { prev, next } = useSiteStore(contentBottomSel, isEqual);

  const { mobile } = useResponsive();

  return (
    <Flexbox
      horizontal={!mobile}
      gap={mobile ? 12 : 0}
      distribution={'space-between'}
      style={{ marginInline: mobile ? 12 : 0 }}
    >
      {prev ? <Linker type={'prev'} {...prev} /> : <div />}

      {next ? <Linker type={'next'} {...next} /> : <div />}
    </Flexbox>
  );
};

export default memo(ContentFooter);
