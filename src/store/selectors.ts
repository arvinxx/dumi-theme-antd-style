import { AnchorItem, ApiHeaderConfig, IFeature } from '../types';
import { SiteStore } from './useSiteStore';

/**
 * 判断是否需要 ApiHeader
 * @param s
 */
export const isApiPageSel = (s: SiteStore) => {
  const fm = s.routeMeta.frontmatter;

  if (s.siteData.themeConfig.apiHeader === false || fm.apiHeader === false) return false;

  const baseMatch = ['/api', '/components', ...(s.siteData.themeConfig.apiHeader?.match || [])];

  return baseMatch.some((path) => s.location.pathname.startsWith(path));
};

export const isHeroPageSel = (s: SiteStore) => !!s.routeMeta.frontmatter.hero;

interface ApiHeader {
  pkg: string;
  sourceUrl?: string;
  docUrl?: string;
}

export const apiHeaderSel = (s: SiteStore): ApiHeader => {
  const REPO_BASE = s.siteData.themeConfig.github;
  const fm = s.routeMeta.frontmatter;
  const localeId = s.locale.id;

  const {
    pkg,
    sourceUrl: sourceUrlMatch,
    docUrl: docUrlMatch,
  } = (s.siteData.themeConfig.apiHeader || {}) as ApiHeaderConfig;

  const sourceUrl =
    sourceUrlMatch === false || typeof sourceUrlMatch === 'undefined' || !fm.atomId
      ? undefined
      : sourceUrlMatch
          .replace('{github}', REPO_BASE)
          .replace('{atomId}', fm.atomId)
          .replace('{title}', fm.title);

  const docUrl =
    docUrlMatch === false || typeof docUrlMatch === 'undefined' || !fm.atomId
      ? undefined
      : docUrlMatch
          .replace('{github}', REPO_BASE)
          .replace('{atomId}', fm.atomId)
          .replace('{title}', fm.title)
          .replace('{locale}', localeId);

  // 如果配置了 pkg， 则使用配置的 pkg，否则使用 package.json 中的 name
  const displayPackage = pkg || s.siteData.pkg.name;

  return { pkg: displayPackage, sourceUrl, docUrl };
};

const localeValueSel = (s: SiteStore, value: any) => {
  if (!value) return;

  if (value[s.locale.id]) return value[s.locale.id];

  return value;
};

/**
 * Hero Title 选择器
 * 选择逻辑：优先使用 hero 配置的 title， 再兜底到 themeConfig 中的 name
 */
export const heroTitleSel = (s: SiteStore) =>
  s.routeMeta.frontmatter.hero?.title ||
  localeValueSel(s, s.siteData.themeConfig.title) ||
  s.siteData.themeConfig.name;

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
export const featuresSel = (s: SiteStore): IFeature[] => {
  if (!isHeroPageSel(s)) return [];

  const features = s.siteData.themeConfig.features;
  // 在themeConfig 没有配置的话，尝试兜底到 frontmatter 中的配置
  if (!features) return (s.routeMeta.frontmatter.features as IFeature[]) || [];

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

/**
 * 将 sidebar 信息扁平化
 * @param s
 */
export const flattenSidebarSel = (s: SiteStore) => {
  return s.sidebar.map((i) => i.children).flat();
};

export const contentBottomSel = (s: SiteStore) => {
  const dataFlatten = flattenSidebarSel(s);
  const path = s.location.pathname;
  const currentIndex = dataFlatten.findIndex((item) => item.link === path);

  return { prev: dataFlatten[currentIndex - 1], currentIndex, next: dataFlatten[currentIndex + 1] };
};
