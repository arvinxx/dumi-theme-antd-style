import { useIntl, useRouteMeta } from 'dumi';
import { memo, useLayoutEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useSiteStore } from '../../store';

const LastUpdatedTime = () => {
  const intl = useIntl();
  const { frontmatter } = useRouteMeta();
  const [isoLastUpdated, setIsoLastUpdated] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const showLastUpdated = useSiteStore((s) => Boolean(s.siteData.themeConfig?.lastUpdated));

  // to avoid timestamp mismatched between server and client
  useLayoutEffect(() => {
    if (showLastUpdated) {
      setIsoLastUpdated(new Date(frontmatter.lastUpdated!).toISOString());
      setLastUpdated(
        new Intl.DateTimeFormat(undefined, {
          dateStyle: 'short',
          timeStyle: 'short',
        }).format(frontmatter.lastUpdated),
      );
    }
  }, [showLastUpdated]);

  // ======== render ========
  if (!showLastUpdated) {
    return null;
  }

  return (
    <Flexbox gap={4} horizontal>
      {intl.formatMessage({ id: 'content.footer.last.updated' })}
      <time dateTime={isoLastUpdated}>{lastUpdated}</time>
    </Flexbox>
  );
};

export default memo(LastUpdatedTime);
