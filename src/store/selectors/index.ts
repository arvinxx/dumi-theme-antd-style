import { AnchorItem } from '@/types';
import { ISidebarItem } from 'dumi/dist/client/theme-api/types';
import { SiteStore } from '../useSiteStore';

export * from './apiHeader';
export * from './hero';
export * from './token';

/**
 * 站点标题选择器
 */
export const siteTitleSel = (s: SiteStore) => s.siteData.themeConfig.name;

export const activePathSel = (s: SiteStore) => {
  if (s.location.pathname === '/') return '/';

  const item = s.navData
    .filter((i) => i.link !== '/')
    .find((i) => s.location.pathname.startsWith(i.activePath! || i.link));

  return item?.activePath || item?.link || '';
};

/**
 * toc 锚点选择器
 * @param s
 */
export const tocAnchorItemSel = (s: SiteStore) =>
  s.routeMeta.toc.reduce<AnchorItem[]>((result, item) => {
    const shouldKeepWith = (depth: number) => {
      if (!s.routeMeta.frontmatter.tocDepth) return true;

      if (
        typeof s.routeMeta.frontmatter.tocDepth === 'number' &&
        s.routeMeta.frontmatter.tocDepth > depth - 1
      )
        return true;
    };

    if (item.depth === 2 && shouldKeepWith(2)) {
      result.push({ ...item });
    } else if (item.depth === 3 && shouldKeepWith(3)) {
      const parent = result[result.length - 1];
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push({ ...item });
      }
    }
    return result;
  }, []);

/**
 * 将 sidebar 信息扁平化
 * @param s
 */
export const flattenSidebarSel = (s: SiteStore): ISidebarItem[] => {
  return s.sidebar?.map((i) => i.children).flat() || [];
};

export const contentBottomSel = (s: SiteStore) => {
  const dataFlatten = flattenSidebarSel(s);
  const path = s.location.pathname;
  const currentIndex = dataFlatten.findIndex((item) => item.link === path);

  return { prev: dataFlatten[currentIndex - 1], currentIndex, next: dataFlatten[currentIndex + 1] };
};
