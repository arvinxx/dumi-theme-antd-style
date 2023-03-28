import { ThemeConfig } from 'antd';

import { ColorPalettes, genMapTokenAlgorithm } from '../algorithms';

const lightMode = genMapTokenAlgorithm();

export const lightColorPalettes: ColorPalettes = lightMode.palettes;

export const lightTheme: ThemeConfig = {
  token: {
    colorBgLayout: 'hsl(220,23%,97%)', // Layout 颜色
    colorTextBase: 'hsl(220,2%,25%)',

    colorLinkHover: lightColorPalettes.primary[5],
    colorLink: lightColorPalettes.primary[6],
    colorLinkActive: lightColorPalettes.primary[7],
  },

  algorithm: (seedToken, mapToken) => ({
    ...mapToken!,
    ...lightMode.tokens,
  }),
};
