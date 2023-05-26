import type { SiteStore } from '..';
import { apiHeaderSel } from './apiHeader';

describe('apiHeaderSel', () => {
  test('有 siteData，但没有 themeConfig.apiHeader 的情况', () => {
    const s = {
      siteData: {},
    } as unknown as SiteStore;
    const result = apiHeaderSel(s);
    expect(result).toEqual({
      title: undefined,
      description: undefined,
      pkg: undefined,
      defaultImport: false,
      componentName: undefined,
      sourceUrl: undefined,
      docUrl: undefined,
    });
  });

  test('有 siteData 和 themeConfig.apiHeader，但没有 fm.apiHeader 的情况', () => {
    const s = {
      siteData: {
        themeConfig: {
          apiHeader: {},
        },
      },
      routeMeta: {
        frontmatter: {},
      },
      locale: {
        id: 'zh-CN',
      },
    } as unknown as SiteStore;
    const result = apiHeaderSel(s);
    expect(result).toEqual({
      title: undefined,
      description: undefined,
      pkg: undefined,
      defaultImport: false,
      componentName: undefined,
      sourceUrl: undefined,
      docUrl: undefined,
    });
  });

  test('有 siteData、themeConfig.apiHeader 和 fm.apiHeader，但其中某些值为空的情况', () => {
    const s = {
      siteData: {
        pkg: {
          name: 'vuepress',
        },
        themeConfig: {
          apiHeader: {
            pkg: 'test-pkg',
            sourceUrl: '{github}/blob/main/{locale}/{title}.vue',
            docUrl: '{github}/blob/main/{locale}/docs/{atomId}.md',
          },
        },
      },
      routeMeta: {
        frontmatter: {
          title: 'test-title',
          description: 'test-description',
          atomId: 'test-atomId',
          apiHeader: {
            defaultImport: true,
          },
        },
      },
      locale: {
        id: 'zh-CN',
      },
    } as unknown as SiteStore;
    const result = apiHeaderSel(s);
    expect(result).toEqual({
      title: 'test-title',
      description: 'test-description',
      pkg: 'test-pkg',
      defaultImport: true,
      componentName: 'test-atomId',
    });
  });

  test('有 siteData、themeConfig.apiHeader 和 fm.apiHeader，且所有值都存在的情况', () => {
    const s = {
      siteData: {
        pkg: {
          name: 'vuepress',
        },
        themeConfig: {
          apiHeader: {
            pkg: 'test-pkg',
            sourceUrl: '{github}/blob/main/{locale}/{title}.vue',
            docUrl: '{github}/blob/main/{locale}/docs/{atomId}.md',
          },
        },
      },
      routeMeta: {
        frontmatter: {
          title: 'test-title',
          description: 'test-description',
          atomId: 'test-atomId',
          apiHeader: {
            pkg: 'test-fm-pkg',
            defaultImport: true,
            sourceUrl: '{github}/blob/main/{locale}/{title}.ts',
            docUrl: '{github}/blob/main/{locale}/docs/{atomId}.md',
          },
        },
      },
      locale: {
        id: 'zh-CN',
      },
    } as unknown as SiteStore;
    const result = apiHeaderSel(s);
    expect(result).toEqual({
      title: 'test-title',
      description: 'test-description',
      pkg: 'test-fm-pkg',
      defaultImport: true,
      componentName: 'test-atomId',
    });
  });
});
