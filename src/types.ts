export interface IFeature {
  title: string;
  description?: string;
  avatar?: string;
  link?: string;
  imageStyle?: any;
  row?: number;
  column?: number;
  center?: boolean;
}

export interface ApiHeaderConfig {
  pkg: string;
  match: string[];
  sourceUrl?: string | false;
  docUrl?: string | false;
}

export type IFeatures =
  | IFeature[]
  | {
      [key: string]: IFeature[];
    };

export interface AnchorItem {
  id: string;
  title: string;
  children?: AnchorItem[];
}
