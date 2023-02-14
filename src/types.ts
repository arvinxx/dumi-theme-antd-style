export interface Feature {
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
  match: ['/components'];
  sourceUrl?: string | false;
  docUrl?: string | false;
}

export type Features =
  | Feature[]
  | {
      [key: string]: Feature[];
    };

export interface AnchorItem {
  id: string;
  title: string;
  children?: AnchorItem[];
}
