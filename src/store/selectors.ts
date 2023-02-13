import { AnchorItem, Feature } from '../types';
import { SiteStore } from './useSiteStore';

export const isApiPageSel = (s: SiteStore) => s.location.pathname.startsWith('/api');
export const isHeroPageSel = (s: SiteStore) => !!s.routeMeta.frontmatter.hero;

/**
 * Hero Title 选择器
 * 选择逻辑：优先使用 hero 配置的 title， 再兜底到 themeConfig 中的 name
 */
export const heroTitleSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.title || s.siteData.themeConfig.name;

/**
 * 站点标题选择器
 */
export const siteTitleSel = (s: SiteStore) => s.siteData.themeConfig.name;

export const localeIdSel = (s: SiteStore) => s.locale.id;
/**
 * Features 选择器
 */
export const featuresSel = (s: SiteStore): Feature[] => {
  if (!isHeroPageSel(s)) return [];

  const features = s.siteData.themeConfig.features;
  if (!features) return [];

  // 如果直接是数组，直接返回即可
  if (Array.isArray(features)) return features;

  // 如果是个对象，那么返回当前的语种结果
  return features[localeIdSel(s)] || [];
};

export const activePathSel = (s: SiteStore) => {
  if (s.location.pathname === '/') return '/';

  const item = s.navData
    .filter((i) => i.link !== '/')
    .find((i) => s.location.pathname.startsWith(i.activePath!));

  return item?.activePath || '';
};

/**
 * toc 锚点选择器
 * @param s
 */
export const tocAnchorItemSel = (s: SiteStore) =>
  s.routeMeta.toc.reduce<AnchorItem[]>((result, item) => {
    if (item.depth === 2) {
      result.push({ ...item });
    } else if (item.depth === 3) {
      const parent = result[result.length - 1];
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push({ ...item });
      }
    }
    return result;
  }, []);
