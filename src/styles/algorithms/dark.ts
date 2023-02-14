import { theme } from 'antd';
import { MappingAlgorithm } from 'antd-style';

// 这一版的暗色浅色系列已经差不多了
const primaryColors = [
  '#ffffff',
  '#002653',
  '#003572',
  '#004593',
  '#0055b6',
  '#0066dc',
  '#1677ff',
  '#257fff',
  '#3187ff',
  '#3c8fff',
  '#4796ff',
];

const greenColors = [
  '#031d00',
  '#043500',
  '#094e07',
  '#136917',
  '#1a8528',
  '#1da239',
  '#1cc14b',
  '#00bd34',
  '#00b815',
  '#2eb200',
  '#46ab00',
];

const yellowColors = [
  '#221500',
  '#3d2900',
  '#5b3e00',
  '#7a5500',
  '#9b6d00',
  '#bd8500',
  '#e09f00',
  '#d99a00',
  '#d29500',
  '#cc9000',
  '#c58b00',
];

const redColors = [
  '#360406',
  '#4e0e0f',
  '#681a19',
  '#832524',
  '#9f312f',
  '#bc3d3a',
  '#da4a45',
  '#ee4342',
  '#ff3d41',
  '#ff5050',
  '#ff605e',
];

export const darkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
  const mergeToken = theme.darkAlgorithm(seedToken, mapToken);

  return {
    ...mergeToken,

    colorBgLayout: 'hsl(218,22%,7%)', // Layout 颜色
    colorBgContainer: 'hsl(216,18%,11%)', // 容器颜色
    colorBgElevated: 'hsl(216,13%,15%)', // 悬浮类面板颜色

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

    colorInfoBg: primaryColors[1],
    colorInfoBgHover: primaryColors[2],
    colorInfoBorder: primaryColors[3],
    colorInfoBorderHover: primaryColors[4],

    colorInfoHover: primaryColors[7],
    colorInfo: primaryColors[6],
    colorInfoActive: primaryColors[5],

    colorInfoTextHover: primaryColors[8],
    colorInfoText: primaryColors[9],
    colorInfoTextActive: primaryColors[10],

    colorSuccessBg: greenColors[1],
    colorSuccessBgHover: greenColors[2],
    colorSuccessBorder: greenColors[3],
    colorSuccessBorderHover: greenColors[4],
    colorSuccessHover: greenColors[7],
    colorSuccess: greenColors[6],
    colorSuccessActive: greenColors[5],
    colorSuccessTextHover: greenColors[8],
    colorSuccessText: greenColors[9],
    colorSuccessTextActive: greenColors[10],

    colorWarningBg: yellowColors[1],
    colorWarningBgHover: yellowColors[2],
    colorWarningBorder: yellowColors[3],
    colorWarningBorderHover: yellowColors[4],
    colorWarningHover: yellowColors[7],
    colorWarning: yellowColors[6],
    colorWarningActive: yellowColors[5],
    colorWarningTextHover: yellowColors[8],
    colorWarningText: yellowColors[9],
    colorWarningTextActive: yellowColors[10],

    colorErrorBg: redColors[1],
    colorErrorBgHover: redColors[2],
    colorErrorBorder: redColors[3],
    colorErrorBorderHover: redColors[4],
    colorErrorHover: redColors[7],
    colorError: redColors[6],
    colorErrorActive: redColors[5],
    colorErrorTextHover: redColors[8],
    colorErrorText: redColors[9],
    colorErrorTextActive: redColors[10],
  };
};
