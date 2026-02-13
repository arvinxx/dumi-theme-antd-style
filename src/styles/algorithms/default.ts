import type { ColorMapToken } from 'antd/es/theme/interface/maps/colors';

import chroma from 'chroma-js';
import { MapTokenAlgorithmParams, TokenRelationship } from './types';
import { generateAssociatedColors } from './utils/colorRelationship';
import { generateColorWithTransparency } from './utils/netural';
import {
  ColorPalettes,
  TokenType,
  generateColorPalette,
  generateNeutralPalette,
} from './utils/paletteGenerator';

const defaultRelationship: TokenRelationship = (type) => {
  const key = type.toUpperCase()[0] + type.slice(1);

  return {
    [`color${key}Bg`]: 1,
    [`color${key}BgHover`]: 2,
    [`color${key}Border`]: 3,
    [`color${key}BorderHover`]: 4,
    [`color${key}Hover`]: 5,
    [`color${key}`]: 6,
    [`color${key}Active`]: 7,
    [`color${key}TextHover`]: 8,
    [`color${key}Text`]: 9,
    [`color${key}TextActive`]: 10,
  };
};

const neturalTokenReleatioship = {
  colorText: 88,
  colorTextSecondary: 65,
  colorTextTertiary: 45,
  colorTextQuaternary: 25,

  colorBorder: 15,
  colorBorderSecondary: 6,

  colorFill: 12,
  colorFillSecondary: 6,
  colorFillTertiary: 4,
  colorFillQuaternary: 2,
  colorBgLayout: 4,
  colorBgContainer: 0,
  colorBgElevated: 0,
  colorBgSpotlight: 85,
};

const transparentToken = [
  'colorText',
  'colorTextSecondary',
  'colorTextTertiary',
  'colorTextQuaternary',
  'colorFill',
  'colorFillSecondary',
  'colorFillTertiary',
  'colorFillQuaternary',
];

export const genMapTokenAlgorithm = (params?: MapTokenAlgorithmParams) => {
  const {
    relationship = defaultRelationship,
    infoColorFollowPrimary = false,
    adjustWarning,
    brandColor = '#1677FF',
  } = params || {};

  const funcColors = generateAssociatedColors(brandColor, adjustWarning);

  const seedColors = {
    primary: brandColor,
    ...funcColors,
    ...params?.seedColors,
  };

  if (infoColorFollowPrimary) {
    seedColors.info = brandColor;
  }

  const palettes: ColorPalettes = {
    primary: generateColorPalette(seedColors.primary, params).map((color) => color.hex),
    error: generateColorPalette(seedColors.error, params).map((c) => c.hex),
    warning: generateColorPalette(seedColors.warning, params).map((c) => c.hex),
    success: generateColorPalette(seedColors.success, params).map((c) => c.hex),
    info: generateColorPalette(seedColors.info, params).map((color) => color.hex),
    neutral: generateNeutralPalette(seedColors.primary, {
      ...params,
      neutral: true,
    }).map((c) => c.hex),
    grey: generateNeutralPalette(seedColors.primary, params).map((c) => c.hex),
  };

  let tokens = {} as Partial<Record<keyof ColorMapToken, string>>;

  const types = ['primary', 'error', 'warning', 'success', 'info'] as TokenType[];

  types.forEach((type) => {
    Object.entries(relationship(type)).forEach(([key, value]) => {
      tokens[key as keyof ColorMapToken] = palettes[type][value];
    });
  });

  const naturalColorGenerator = (lightness: number, isTransparent: boolean) => {
    const baseColor = chroma(brandColor);
    const baseColorOKLCH = baseColor.oklch();

    // 计算中性颜色的色相
    const neutralHue = baseColorOKLCH[2];

    // 将主色的饱和度降低以获得中性颜色
    const neutralChromaValue = baseColorOKLCH[1];

    const lum = 1 - lightness / 100;
    // 使用降低饱和度的颜色作为基础色重新生成色板
    const neutralBaseColor = chroma.oklch(lum, neutralChromaValue / 40, neutralHue);

    return isTransparent
      ? generateColorWithTransparency(neutralBaseColor.hex())
      : neutralBaseColor.hex();
  };

  Object.entries(neturalTokenReleatioship).forEach(([key, value]) => {
    // @ts-ignore
    tokens[key] = naturalColorGenerator(value, transparentToken.includes(key));
  });

  return { palettes, tokens };
};
