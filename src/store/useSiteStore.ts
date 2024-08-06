import type { ISiteContext } from 'dumi/dist/client/theme-api/context';
import { ILocale, INavItem, IRouteMeta, ISidebarGroup } from 'dumi/dist/client/theme-api/types';
import equal from 'fast-deep-equal';
import type { Location } from 'history';
import { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { devtools } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

export type NavData = (INavItem & { children?: INavItem[] | undefined })[];

export type ISiteData = ISiteContext;

export interface SiteStore {
  siteData: ISiteData;
  sidebar?: ISidebarGroup[];
  routeMeta: IRouteMeta;
  tabMeta?: NonNullable<IRouteMeta['tabs']>[0]['meta'];
  navData: NavData;
  location: Location;
  locale: ILocale;
}

export const createStore = (initState: SiteStore) =>
  createWithEqualityFn<SiteStore>()(
    devtools(() => initState, { name: 'dumi-theme-antd-style' }),
    equal,
  );

const { useStore, useStoreApi, Provider } = createContext<StoreApi<SiteStore>>();
export { Provider, useStore as useSiteStore, useStoreApi };
