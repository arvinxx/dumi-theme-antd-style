import {
  useLocale,
  useLocation,
  useNavData,
  useRouteMeta,
  useSidebarData,
  useSiteData,
} from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { SiteStore, useSiteStore } from '../../store/useSiteStore';

const isBrowser = typeof window !== 'undefined';

const SSRInit: Record<string, boolean> = {};

const useSyncState = <T extends keyof SiteStore>(
  key: T,
  value: SiteStore[T],
  updateMethod?: (key: T, value: SiteStore[T]) => void,
) => {
  const updater = updateMethod
    ? updateMethod
    : (key: T, value: SiteStore[T]) => useSiteStore.setState({ [key]: value });

  // 如果是 Node 环境，直接更新一次 store
  // 但是为了避免多次更新 store，所以加一个标记
  if (!isBrowser && !SSRInit[key]) {
    updater(key, value);
    SSRInit[key] = true;
  }

  useEffect(() => {
    updater(key, value);
  }, [value]);
};

const homeNav = {
  title: '首页',
  link: '/',
  activePath: '/',
};

export const StoreUpdater = memo(() => {
  const siteData = useSiteData();
  const sidebar = useSidebarData();
  const routeMeta = useRouteMeta();
  const navData = useNavData();
  const location = useLocation();
  const locale = useLocale();

  useSyncState('siteData', siteData, () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setLoading, ...data } = siteData;
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      siteData: { setLoading: _, ...prevData },
    } = useSiteStore.getState();

    if (isEqual(data, prevData)) return;

    useSiteStore.setState({ siteData });
  });

  useSyncState('sidebar', sidebar);
  useSyncState('routeMeta', routeMeta);
  useSyncState('location', location);
  useSyncState('locale', locale);

  useSyncState('navData', navData, () => {
    useSiteStore.setState({ navData: [homeNav, ...navData] });
  });

  return null;
});
