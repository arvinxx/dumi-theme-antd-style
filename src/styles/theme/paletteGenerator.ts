import chroma from 'chroma-js';

export interface Color {
  hex: string;
  oklch: [number, number, number];
}

export interface ColorPaletteOptions {
  lighterShades?: number;
  darkerShades?: number;
  minBrightness?: number;
  maxBrightness?: number;
  lighterSaturationAdjustment?: number;
  darkerSaturationAdjustment?: number;
  darkHueAdjustment?: number;
  saturationScale?: number;
  reverse?: boolean;
}

// 生成 OKLCH 色板
export const generateColorPalette = (
  baseColorHex: string,
  options: ColorPaletteOptions = {},
): Color[] => {
  const {
    lighterShades = 6,
    darkerShades = 4,
    minBrightness = 0.3,
    maxBrightness = 0.98,
    lighterSaturationAdjustment = 0.4,
    darkerSaturationAdjustment = 0.6,
    saturationScale = 1.6,
    darkHueAdjustment = 1.03,
    reverse = false,
  } = options;

  const baseColor = chroma(baseColorHex);
  const baseColorOKLCH = baseColor.oklch();

  const colorPalette: Color[] = [];

  for (let i = lighterShades; i > 0; i--) {
    const lightness = baseColorOKLCH[0] + ((maxBrightness - baseColorOKLCH[0]) / lighterShades) * i;
    const chromaValue =
      baseColorOKLCH[1] -
      (((1 - lighterSaturationAdjustment) * saturationScale * baseColorOKLCH[1]) / lighterShades) *
        i;
    const newColor = chroma.oklch(lightness, chromaValue, baseColorOKLCH[2]);
    colorPalette.push({ hex: newColor.hex(), oklch: newColor.oklch() });
  }

  colorPalette.push({ hex: baseColorHex, oklch: baseColorOKLCH });

  for (let i = 1; i <= darkerShades; i++) {
    const lightness = baseColorOKLCH[0] - ((baseColorOKLCH[0] - minBrightness) / darkerShades) * i;
    const chromaValue =
      baseColorOKLCH[1] -
      (((1 - darkerSaturationAdjustment) * saturationScale * baseColorOKLCH[1]) / darkerShades) * i;

    // 色相调整因子
    let hue = baseColorOKLCH[2] * darkHueAdjustment;

    // 确保色相值在 0 到 360 之间
    if (hue > 360) {
      hue = hue % 360;
    } else if (hue < 0) {
      hue = 360 + (hue % 360);
    }

    const newColor = chroma.oklch(lightness, chromaValue, hue);
    colorPalette.push({ hex: newColor.hex(), oklch: newColor.oklch() });
  }

  return reverse ? colorPalette.reverse() : colorPalette;
};

export type TokenType = 'primary' | 'success' | 'warning' | 'error' | 'info';

export type ColorPalettes = Record<TokenType, string[]>;
export type SeedColors = Record<TokenType, string>;
