import { useIsomorphicLayoutEffect } from 'ahooks';
import { getRouteMetaById, matchRoutes, useAppData, useLocation, useRouteData } from 'dumi';
import type { IRouteMeta, IRoutesById } from 'dumi/dist/client/theme-api/types';
import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { useStoreApi } from '../../store/useSiteStore';

const EMPTY_META = {
  frontmatter: {},
  toc: [],
  texts: [],
} as any;

/**
 * see: https://github.com/umijs/dumi/blob/dbe65427b534414ab65a2a65e6aeeecf4ca44823/src/client/theme-api/useRouteMeta.ts
 * FIXME: 因为 dumi 没有提供 api 用于获取当前 route.id 来匹配 meta 信息，所以这里暂时复制了 dumi 的 useRouteMeta 实现
 * dumi 的 useRouteMeta 默认返回了一个 Proxy 对象，用于动态获取当前 route 的 meta 信息，这里需要用 swr 来获取。
 * update-date: 2024/05/30 @Wxh16144
 */
export const useRouteMeta = () => {
  const { route } = useRouteData();
  const { pathname } = useLocation();
  const { clientRoutes } = useAppData();
  const storeApi = useStoreApi();
  const getter = useCallback(() => {
    let ret: IRoutesById[string];

    if (route.path === pathname && !('isLayout' in route)) {
      // use `useRouteData` result if matched, for performance
      ret = route as any;
    } else {
      // match manually for dynamic route & layout component
      const matched = matchRoutes(clientRoutes, pathname)?.pop();
      ret = matched?.route as any;
    }

    return ret;
  }, [clientRoutes.length, pathname]);

  const [matchedRoute, setMatchedRoute] = useState(getter);
  useIsomorphicLayoutEffect(() => {
    setMatchedRoute(getter);
  }, [clientRoutes.length, pathname]);

  const merge = (meta: IRouteMeta = EMPTY_META) => {
    if (matchedRoute.meta) {
      Object.keys(matchedRoute.meta).forEach((key) => {
        (meta as any)[key] ??= (matchedRoute.meta as any)[key];
      });
    }

    return meta;
  };

  useSWR(matchedRoute.id, getRouteMetaById, {
    fallback: EMPTY_META,
    onSuccess: (meta) => {
      storeApi.setState({ routeMeta: merge(meta) });
    },
  });
};
