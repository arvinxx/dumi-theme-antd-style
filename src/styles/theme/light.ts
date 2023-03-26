import { ThemeConfig } from 'antd';
import { MappingAlgorithm } from 'antd-style';
import { generateColorPalette } from './generator';

const geneated = generateColorPalette('#1677FF');

console.log(geneated);

export const primaryColors = geneated.map((c) => c.hex);

const blueColors = geneated.map((c) => c.hex);

export const errorColors = generateColorPalette('#da4a45').map((c) => c.hex);

export const warningColors = generateColorPalette('#bb8400').map((c) => c.hex);

export const successColors = generateColorPalette('#1cc14b').map((c) => c.hex);

export const lightAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
  return {
    ...mapToken!,

    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],

    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],

    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[5],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],

    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[5],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],

    colorInfoBg: blueColors[1],
    colorInfoBgHover: blueColors[2],
    colorInfoBorder: blueColors[3],
    colorInfoBorderHover: blueColors[4],
    colorInfoHover: blueColors[5],
    colorInfo: blueColors[6],
    colorInfoActive: blueColors[7],
    colorInfoTextHover: blueColors[8],
    colorInfoText: blueColors[9],
    colorInfoTextActive: blueColors[10],
  };
};

export const lightTheme: ThemeConfig = {
  token: {
    colorBgLayout: 'hsl(220,23%,97%)', // Layout 颜色
    colorTextBase: 'hsl(220,2%,25%)',

    colorLinkHover: primaryColors[5],
    colorLink: primaryColors[6],
    colorLinkActive: primaryColors[7],
  },
  components: {
    Alert: {
      colorInfo: blueColors[7],
      colorError: errorColors[7],
      colorSuccess: successColors[7],
      colorWarning: warningColors[7],
    },
  },
  algorithm: lightAlgorithm,
};
