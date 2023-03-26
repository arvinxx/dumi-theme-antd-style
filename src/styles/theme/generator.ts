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
  saturationAdjustmentLighter?: number;
  saturationAdjustmentDarker?: number;
  saturationScale?: number;
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
    saturationAdjustmentLighter = 0.4,
    saturationAdjustmentDarker = 1,
    saturationScale = 1.6,
  } = options;

  const baseColor = chroma(baseColorHex);
  const baseColorOKLCH = baseColor.oklch();

  const colorPalette: Color[] = [];

  for (let i = lighterShades; i > 0; i--) {
    const lightness = baseColorOKLCH[0] + ((maxBrightness - baseColorOKLCH[0]) / lighterShades) * i;
    const chromaValue =
      baseColorOKLCH[1] -
      (((1 - saturationAdjustmentLighter) * saturationScale * baseColorOKLCH[1]) / lighterShades) *
        i;
    const newColor = chroma.oklch(lightness, chromaValue, baseColorOKLCH[2]);
    colorPalette.push({ hex: newColor.hex(), oklch: newColor.oklch() });
  }

  colorPalette.push({ hex: baseColorHex, oklch: baseColorOKLCH });

  for (let i = 1; i <= darkerShades; i++) {
    const lightness = baseColorOKLCH[0] - ((baseColorOKLCH[0] - minBrightness) / darkerShades) * i;
    const chromaValue =
      baseColorOKLCH[1] -
      (((1 - saturationAdjustmentDarker) * saturationScale * baseColorOKLCH[1]) / darkerShades) * i;
    const newColor = chroma.oklch(lightness, chromaValue, baseColorOKLCH[2]);
    colorPalette.push({ hex: newColor.hex(), oklch: newColor.oklch() });
  }

  return colorPalette;
};
