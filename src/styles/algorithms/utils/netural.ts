import chroma from 'chroma-js';

export const generateColorWithTransparency = (color: string, backgroundColor = '#000') => {
  const baseColor = chroma(color).oklch();
  const bgColor = chroma(backgroundColor).oklch();

  let high = 1.0;
  let low = 0.0;
  let alpha = 0.5;
  let epsilon = 0.01;
  let mixedLight: number = 0;

  while (high - low > epsilon) {
    const mixedColor = chroma
      .oklch((1 - alpha) * bgColor[0] + alpha * baseColor[0], baseColor[1], baseColor[2])
      .rgb();

    mixedLight = chroma(mixedColor).oklch()[0];

    if (mixedLight > baseColor[0]) {
      high = alpha;
    } else {
      low = alpha;
    }

    alpha = (high + low) / 2;
  }

  // 返回的颜色是一个rgba字符串
  return chroma.oklch(mixedLight, baseColor[1], baseColor[2]).alpha(alpha).hex('rgba');
};
