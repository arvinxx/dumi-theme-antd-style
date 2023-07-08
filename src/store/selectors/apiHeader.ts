import { camelCase, kebabCase, snakeCase, upperFirst } from 'lodash';
import { ApiHeaderConfig, ApiHeaderProps } from '../../types';
import { SiteStore } from '../useSiteStore';
import { githubSel } from './siteBasicInfo';

/**
 * 判断是否需要 ApiHeader
 * @param s
 */
export const isApiPageSel = (s: SiteStore) => {
  const fm = s.routeMeta.frontmatter;

  if (s.siteData.themeConfig.apiHeader === false || fm.apiHeader === false) return false;

  if (!!fm.apiHeader) return true;

  const baseMatch = ['/api', '/components', ...(s.siteData.themeConfig.apiHeader?.match || [])];

  return baseMatch.some((path) => s.location.pathname.startsWith(path));
};

function convertCase(value: string, caseStyle: string) {
  const map: Record<'camel' | 'kebab' | 'snake' | 'pascal' | 'default', () => string> = {
    camel: () => camelCase(value),
    pascal: () => upperFirst(camelCase(value)),
    kebab: () => kebabCase(value),
    snake: () => snakeCase(value),
    default: () => value,
  };
  return (map[caseStyle as keyof typeof map] || map.default)();
}

export const apiHeaderSel = (s: SiteStore): ApiHeaderProps => {
  const REPO_BASE = githubSel(s);
  const fm = s.routeMeta?.frontmatter || {};
  const localeId = s.locale?.id;

  // 统一的路径匹配替换方法
  const replaceUrl = (rawStr: string) => {
    if (!REPO_BASE) return undefined;

    return rawStr
      .replace('{github}', REPO_BASE)
      .replace('{atomId}', fm.atomId || '')
      .replace(/\{atomId\.([^}]+)}/g, (_, caseStyle: string) =>
        convertCase(fm.atomId || '', caseStyle),
      )
      .replace('{title}', fm.title)
      .replace('{locale}', localeId);
  };

  const haseUrl = (config: false | string | undefined) => {
    if (config === false) return false;

    return typeof config === 'string';
  };

  const {
    pkg = s.siteData?.pkg?.name,
    sourceUrl: globalSourceUrl,
    docUrl: globalDocUrl,
  } = (s.siteData?.themeConfig?.apiHeader || {}) as ApiHeaderConfig;

  // 1. 兜底默认使用文档的 apiHeader.pkg
  // 2. 如果 themeConfig 里配置了 pkg， 则使用配置的 pkg
  // 3. 兜底使用 package.json 中的 name
  const displayPackage = fm.apiHeader?.pkg || pkg;

  // 1. 默认使用文档的 fm.atomId
  // 2. 兜底到文档 title
  const componentName = fm.atomId || fm.title;

  // 1. 优先选择使用文档 apiHeader.defaultImport
  // 2. 默认使用 false
  const defaultImport = fm.apiHeader?.defaultImport || false;

  const sourceUrlMatch = fm.apiHeader?.sourceUrl || globalSourceUrl;
  const sourceUrl = haseUrl(sourceUrlMatch) ? replaceUrl(sourceUrlMatch as string) : undefined;

  const docUrlMatch = fm.apiHeader?.docUrl || globalDocUrl;
  const docUrl = haseUrl(docUrlMatch) ? replaceUrl(docUrlMatch) : undefined;

  return {
    title: fm.title,
    description: fm.description,
    pkg: displayPackage,
    defaultImport,
    componentName,
    sourceUrl,
    docUrl,
  };
};
