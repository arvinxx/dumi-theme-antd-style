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
