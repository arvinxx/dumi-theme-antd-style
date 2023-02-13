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

const useSyncState = <T extends keyof SiteStore>(key: T, value: SiteStore[T]) => {
  useEffect(() => {
    useSiteStore.setState({ [key]: value });
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { setLoading, ...data } = siteData;

    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      siteData: { setLoading: _, ...prevData },
    } = useSiteStore.getState();

    if (isEqual(data, prevData)) return;

    useSiteStore.setState({ siteData });
  }, [siteData]);

  useSyncState('sidebar', sidebar);
  useSyncState('routeMeta', routeMeta);
  useSyncState('location', location);
  useSyncState('locale', locale);

  useEffect(() => {
    useSiteStore.setState({ navData: [homeNav, ...navData] });
  }, [navData]);

  useEffect(() => {
    useSiteStore.setState({ location });
  }, [location]);

  return null;
});
