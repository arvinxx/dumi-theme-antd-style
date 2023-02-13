import isEqual from 'fast-deep-equal';
import { type FC } from 'react';

import TOC from '../../components/Toc';
import { tocAnchorItemSel, useSiteStore } from '../../store';

const Toc: FC = () => {
  const items = useSiteStore(tocAnchorItemSel, isEqual);

  return <TOC items={items} />;
};

export default Toc;
