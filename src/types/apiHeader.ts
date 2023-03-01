export interface ApiHeaderProps {
  title: string;
  pkg: string;
  defaultImport?: boolean;
  description?: string;
  sourceUrl?: string;
  docUrl?: string;
  componentName: string;
}

export interface ApiHeaderConfig {
  /**
   * 组件库包名，可以从 package.json 中引入名称
   */
  pkg?: string;
  /**
   *  ApiHeader 组件的匹配路由
   *  @default ["/api", "/components"]
   */
  match?: string[];
  sourceUrl?: string | false;
  docUrl?: string | false;
}
