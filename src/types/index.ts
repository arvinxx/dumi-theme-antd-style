import type { CSSProperties } from 'react';

export type { HighlighterSyntaxTheme } from '../components/Highlighter';
export * from './config';

export type ImageContainerType = 'light' | 'primary' | 'soon';

export interface IFeature {
  title: string;
  description?: string;
  link?: string;
  /**
   * 图片 url
   */
  image?: string;
  /**
   * 图片容器样式类型
   */
  imageType?: ImageContainerType;
  imageStyle?: CSSProperties;

  row?: number;
  column?: number;
  /**
   * 在背后显示 hero 的流动色
   */
  hero?: boolean;
}

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
  pkg: string;
  match?: string[];
  sourceUrl?: string | false;
  docUrl?: string | false;
}

export interface AnchorItem {
  id: string;
  title: string;
  children?: AnchorItem[];
}

export interface IAction {
  type?: 'primary' | 'default';
  text: string;
  link: string;
}

export interface IHero {
  title?: string;
  /**
   * 配置首页首屏区域的简介文字
   */
  description?: string;
  actions: IAction[];
  features?: IFeature[];
}
