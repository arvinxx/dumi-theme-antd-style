import chroma from 'chroma-js';

const isColorWithinRange = (colorHue: number, targetHue: number, range: number) => {
  const difference = Math.abs(colorHue - targetHue);
  const adjustedDifference = Math.min(difference, 360 - difference);
  return adjustedDifference <= range;
};

export const shouldInfoColorFollowPrimary = (baseColorHex: string): boolean => {
  const baseColor = chroma(baseColorHex);
  const [, , baseHue] = baseColor.oklch();

  const blueHue = 260; // 蓝色色相值
  const hueRange = 40; // 允许的色相偏差范围

  // 检查主色是否在蓝色或紫色范围内
  return isColorWithinRange(baseHue, blueHue, hueRange);
};
