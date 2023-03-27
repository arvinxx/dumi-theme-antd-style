import { theme } from 'antd';
import { MappingAlgorithm } from 'antd-style';
import { ThemeConfig } from 'antd/lib';
import { ColorPalettes, TokenType } from './paletteGenerator';
import { genMapTokenAlgorithm } from './tokenAlgorithm';

const cyanColors = [
  'rgba(0, 225, 242, 0.12)',
  'rgba(0, 232, 245, 0.22)',
  'rgba(0, 237, 250, 0.32)',
  'rgba(0, 243, 255, 0.42)',
  'rgba(0, 247, 255, 0.53)',
  'rgba(0, 246, 254, 0.65)',
  'rgba(0, 247, 253, 0.77)',
  'rgba(0, 245, 255, 0.75)',
  'rgba(0, 244, 255, 0.73)',
  'rgba(0, 239, 253, 0.72)',
  'rgba(0, 237, 253, 0.7)',
];

const darkModeRelationship = (type: TokenType) => {
  const key = type.toUpperCase()[0] + type.slice(1);

  return {
    [`color${key}Bg`]: 1,
    [`color${key}BgHover`]: 2,
    [`color${key}Border`]: 3,
    [`color${key}BorderHover`]: 4,
    [`color${key}Hover`]: 7,
    [`color${key}`]: 6,
    [`color${key}Active`]: 5,
    [`color${key}TextHover`]: 8,
    [`color${key}Text`]: 9,
    [`color${key}TextActive`]: 10,
  };
};

const darkOptions = {
  lighterShades: 4, // 减少较亮颜色的数量
  darkerShades: 6, // 增加较暗颜色的数量
  minBrightness: 0.2, // 降低最小亮度值
  maxBrightness: 0.8, // 降低最大亮度值
  lighterSaturationAdjustment: 0.6, // 减小较亮颜色的饱和度调整
  darkerSaturationAdjustment: 0.4, // 增加较暗颜色的饱和度调整
  darkHueAdjustment: 1, // 保持暗色调的色相调整因子
  saturationScale: 1,
  reverse: true,
};

const darkMode = genMapTokenAlgorithm({ ...darkOptions, relationship: darkModeRelationship });

export const darkColorPalettes: ColorPalettes = darkMode.palettes;

export const darkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
  const mergeToken = theme.darkAlgorithm(seedToken, mapToken);

  return {
    ...mergeToken,

    colorBgLayout: 'hsl(218,22%,7%)', // Layout 颜色
    colorBgContainer: 'hsl(216,18%,11%)', // 容器颜色
    colorBgElevated: 'hsl(216,13%,15%)', // 悬浮类面板颜色

    ...darkMode.tokens,

    'cyan-1': cyanColors[1],
    'cyan-2': cyanColors[2],
    'cyan-3': cyanColors[3],
    'cyan-4': cyanColors[4],
    'cyan-5': cyanColors[5],
    'cyan-6': cyanColors[6],
    'cyan-7': cyanColors[7],
    'cyan-8': cyanColors[8],
    'cyan-9': cyanColors[9],
    'cyan-10': cyanColors[10],
  };
};

export const darkTheme: ThemeConfig = {
  token: {
    colorTextBase: '#c7ddff',

    colorLinkHover: darkColorPalettes.primary[7],
    colorLink: darkColorPalettes.primary[6],
    colorLinkActive: darkColorPalettes.primary[5],
  },
  algorithm: darkAlgorithm,
};
