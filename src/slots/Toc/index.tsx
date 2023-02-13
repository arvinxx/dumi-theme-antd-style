import { type FC } from 'react';

import TOC from '../../components/Toc';
import { tocAnchorItemSel, useSiteStore } from '../../store';

const Toc: FC = () => {
  const anchorItems = useSiteStore(tocAnchorItemSel);

  return <TOC items={anchorItems} />;
};

export default Toc;
