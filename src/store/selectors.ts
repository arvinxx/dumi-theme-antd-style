import { AnchorItem, Feature } from '../types';
import { SiteStore } from './useSiteStore';

export const isApiPageSel = (s: SiteStore) => s.location.pathname.startsWith('/api');
export const isHeroPageSel = (s: SiteStore) => !!s.routeMeta.frontmatter.hero;

export const localeIdSel = (s: SiteStore) => s.locale.id;

const localeValueSel = (s: SiteStore, value: any) => {
  if (value[localeIdSel(s)]) return value[localeIdSel(s)];

  return value;
};

/**
 * Hero Title 选择器
 * 选择逻辑：优先使用 hero 配置的 title， 再兜底到 themeConfig 中的 name
 */
export const heroTitleSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.title || s.siteData.themeConfig.name;

/**
 * Hero description 选择器
 * 选择逻辑：优先使用 hero 配置的 description， 再兜底到 themeConfig 中的 name
 */
export const heroDescSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.description ||
  localeValueSel(s, s.siteData.themeConfig.description);

/**
 * Hero Action 选择器
 * 选择逻辑：优先使用 hero 配置的 actions， 再兜底到 themeConfig 中的 actions
 */
export const heroActionsSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.actions || localeValueSel(s, s.siteData.themeConfig.actions);

/**
 * 站点标题选择器
 */
export const siteTitleSel = (s: SiteStore) => s.siteData.themeConfig.name;

/**
 * Features 选择器
 */
export const featuresSel = (s: SiteStore): Feature[] => {
  if (!isHeroPageSel(s)) return [];

  const features = s.siteData.themeConfig.features;
  // 在themeConfig 没有配置的话，尝试兜底到 frontmatter 中的配置
  if (!features) return (s.routeMeta.frontmatter.features as Feature[]) || [];

  return localeValueSel(s, features) || [];
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
