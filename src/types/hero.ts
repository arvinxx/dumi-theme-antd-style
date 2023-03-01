import type { CSSProperties } from 'react';

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
