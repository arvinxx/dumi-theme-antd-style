import { ColorMapToken } from 'antd/es/theme/interface/maps/colors';
import {
  ColorPaletteOptions,
  ColorPalettes,
  generateColorPalette,
  SeedColors,
  TokenType,
} from './paletteGenerator';

export type TokenRelationship = (type: TokenType) => Partial<Record<keyof ColorMapToken, number>>;

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

export const genMapTokenAlgorithm = (
  params?: ColorPaletteOptions & Partial<SeedColors> & { relationship?: TokenRelationship },
) => {
  const {
    primary = '#1677FF',
    info = '#1677FF',
    warning = '#bb8400',
    success = '#1cc14b',
    error = '#da4a45',
    relationship = defaultRelationship,
  } = params || {};

  const palettes: ColorPalettes = {
    primary: generateColorPalette(primary, params).map((color) => color.hex),
    error: generateColorPalette(error, params).map((c) => c.hex),
    warning: generateColorPalette(warning, params).map((c) => c.hex),
    success: generateColorPalette(success, params).map((c) => c.hex),
    info: generateColorPalette(info, params).map((color) => color.hex),
  };

  let tokens = {} as Partial<Record<keyof ColorMapToken, string>>;

  const types = ['primary', 'error', 'warning', 'success', 'info'] as TokenType[];

  types.forEach((type) => {
    Object.entries(relationship(type)).forEach(([key, value]) => {
      tokens[key as keyof ColorMapToken] = palettes[type][value];
    });
  });

  return { palettes, tokens };
};
