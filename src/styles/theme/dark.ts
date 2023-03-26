import { theme } from 'antd';
import { MappingAlgorithm } from 'antd-style';
import { ThemeConfig } from 'antd/lib';
import { generateColorPalette } from './generator';

// 这一版的暗色浅色系列已经差不多了
const primaryColors = generateColorPalette('#1677FF')
  .map((color) => color.hex)
  .reverse();

// console.log(generateColorPalette('#1677FF'));

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
// const cyanColors = [
//   '#001a29',
//   '#002e47',
//   '#004568',
//   '#005c8c',
//   '#0074b2',
//   '#008dda',
//   '#29a7ff',
//   '#00a5fb',
//   '#00a4f2',
//   '#00a2e9',
//   '#00a0e0',
// ];

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
  '#36040a',
  '#510d16',
  '#6d1723',
  '#8b2231',
  '#aa2d3f',
  '#cb394e',
  '#ed445d',
  '#fd3b5b',
  '#ff465f',
  '#ff5365',
  '#ff5e6c',
];

export const darkAlgorithm: MappingAlgorithm = (seedToken, mapToken) => {
  const mergeToken = theme.darkAlgorithm(seedToken, mapToken);

  return {
    ...mergeToken,

    colorBgLayout: 'hsl(218,22%,7%)', // Layout 颜色
    colorBgContainer: 'hsl(216,18%,11%)', // 容器颜色
    colorBgElevated: 'hsl(216,13%,15%)', // 悬浮类面板颜色

    colorPrimaryBg: primaryColors[0],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],

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

    colorInfoBg: primaryColors[1],
    colorInfoBgHover: primaryColors[2],
    colorInfoBorder: primaryColors[3],
    colorInfoBorderHover: primaryColors[4],
    colorInfoHover: primaryColors[5],
    colorInfo: primaryColors[6],
    colorInfoActive: primaryColors[7],
    colorInfoTextHover: primaryColors[8],
    colorInfoText: primaryColors[9],
    colorInfoTextActive: primaryColors[10],

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

    colorLinkHover: primaryColors[7],
    colorLink: primaryColors[6],
    colorLinkActive: primaryColors[5],
  },
  components: {
    Alert: {
      colorInfo: primaryColors[5],
      colorError: redColors[5],
      colorSuccess: greenColors[5],
      colorWarning: yellowColors[5],
    },
  },
  algorithm: darkAlgorithm,
};
