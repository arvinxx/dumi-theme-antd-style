import type { ThemeMode } from 'antd-style';
import {
  genDarkMapTokenAlgorithm,
  genMapTokenAlgorithm,
} from 'dumi-theme-antd-style/styles/algorithms';
import equal from 'fast-deep-equal';

import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

interface Store {
  themeMode: ThemeMode;
  adjustWarning: boolean;
  infoColorFollowPrimary: boolean;
  colorPrimary: string;
}

export const useThemeStore = createWithEqualityFn<Store>()(
  persist<Store>(
    () => ({
      themeMode: 'auto' as ThemeMode,
      colorPrimary: '#1677FF',
      adjustWarning: true,
      infoColorFollowPrimary: false,
    }),
    { name: 'ANTD_STYLE_DOC_STORE' },
  ),
  equal,
);

export interface Palette {
  key: string;
  colors: string[];
}

export const lightColorPalettesSel = (s: Store): Palette[] =>
  Object.entries(
    genMapTokenAlgorithm({
      brandColor: s.colorPrimary,
      adjustWarning: s.adjustWarning,
      infoColorFollowPrimary: s.infoColorFollowPrimary,
    }).palettes,
  ).map(([key, value]) => ({
    key,
    colors: value,
  }));

export const darkColorPalettesSel = (s: Store): Palette[] =>
  Object.entries(
    genDarkMapTokenAlgorithm({
      brandColor: s.colorPrimary,
      adjustWarning: s.adjustWarning,
      infoColorFollowPrimary: s.infoColorFollowPrimary,
    }).palettes,
  ).map(([key, value]) => ({
    key,
    colors: value,
  }));
