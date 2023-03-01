export type { HighlighterSyntaxTheme } from '../components/Highlighter';
export * from './apiHeader';
export * from './config';
export * from './hero';

export interface AnchorItem {
  id: string;
  title: string;
  children?: AnchorItem[];
}
