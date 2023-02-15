import type { CSSProperties } from 'react';

export type { HighlighterSyntaxTheme } from './components/Highlighter';

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

export interface ApiHeaderConfig {
  pkg: string;
  match: string[];
  sourceUrl?: string | false;
  docUrl?: string | false;
}

export type IFeatures = IFeature[] | Record<string, IFeature[]>;

export interface AnchorItem {
  id: string;
  title: string;
  children?: AnchorItem[];
}
