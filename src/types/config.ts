import { ApiHeaderConfig, IHero } from '../types';

export interface SiteThemeConfig {
  name?: string;
  logo?: string;
  /**
   * 导航栏 Github 图标链接，如不配置该字段，则不展示。
   */
  github?: string;

  /**
   * 首页头部
   */
  hero?: IHero | Record<string, IHero>;

  apiHeader?: ApiHeaderConfig | false;

  footer?: string;
}
