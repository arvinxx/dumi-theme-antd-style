import { Skeleton } from 'antd';
import { useSiteStore } from 'dumi-theme-antd-style/store';
import { PropsWithChildren, type FC } from 'react';
import { useStyles } from './style';

const Content: FC<PropsWithChildren> = ({ children }) => {
  const loading = useSiteStore((s) => s.siteData.loading);

  const { styles, cx } = useStyles();
  return (
    <div className={cx('dumi-default-content', styles.content)}>
      <Skeleton active paragraph loading={loading} />
      {children}
    </div>
  );
};

export default Content;
