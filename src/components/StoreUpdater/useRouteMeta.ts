import { useIsomorphicLayoutEffect } from 'ahooks';
import { getRouteMetaById, matchRoutes, useAppData, useLocation, useRouteData } from 'dumi';
import type { IRouteMeta, IRoutesById } from 'dumi/dist/client/theme-api/types';
import { useCallback, useState } from 'react';
import useSWR from 'swr';

const EMPTY_META = {
  frontmatter: {},
  toc: [],
  texts: [],
} as any;

/**
 * see: https://github.com/umijs/dumi/blob/dbe65427b534414ab65a2a65e6aeeecf4ca44823/src/client/theme-api/useRouteMeta.ts
 */
export const useRouteMeta = () => {
  const { route } = useRouteData();
  const { pathname } = useLocation();
  const { clientRoutes } = useAppData();
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

  const { data } = useSWR(matchedRoute.id, getRouteMetaById, { fallback: EMPTY_META });

  return merge(data);
};
