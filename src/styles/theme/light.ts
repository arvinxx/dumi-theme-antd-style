import { ThemeConfig } from 'antd';
import { MappingAlgorithm } from 'antd-style';

const primaryColors = [
  '#ffffff',
  '#d9ebfb',
  '#b4d6f7',
  '#90c0f5',
  '#6caaf5',
  '#4792f8',
  '#1677ff',
  '#0568e0',
  '#005ac0',
  '#004ca1',
  '#003e84',
];

const blueColors = [
  '#ffffff',
  '#dfedfe',
  '#c0dafb',
  '#9fc8fa',
  '#7db5fa',
  '#57a2fb',
  '#178eff',
  '#007adc',
  '#0067b7',
  '#005494',
  '#004274',
];

const redColors = [
  '#ffffff',
  '#ffe1e1',
  '#ffc3c3',
  '#ffa3a2',
  '#f68583',
  '#ea6864',
  '#da4a45',
  '#c0403c',
  '#a63633',
  '#8e2c2a',
  '#762221',
];

const yellowColors = [
  '#ffffff',
  '#ffeed9',
  '#fedeac',
  '#f8ce89',
  '#f1be65',
  '#e9af40',
  '#e09f00',
  '#bb8400',
  '#986b00',
  '#765200',
  '#563b00',
];

const greenColors = [
  '#ffffff',
  '#def6e1',
  '#bdedc7',
  '#9ce3aa',
  '#79d88d',
  '#53cd6d',
  '#1cc14b', // <- 主绿色改了
  '#1ba238',
  '#158327',
  '#0d6715',
  '#024b05',
];

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

    colorErrorBg: redColors[1],
    colorErrorBgHover: redColors[2],
    colorErrorBorder: redColors[3],
    colorErrorBorderHover: redColors[4],
    colorErrorHover: redColors[5],
    colorError: redColors[6],
    colorErrorActive: redColors[7],
    colorErrorTextHover: redColors[8],
    colorErrorText: redColors[9],
    colorErrorTextActive: redColors[10],

    colorWarningBg: yellowColors[1],
    colorWarningBgHover: yellowColors[2],
    colorWarningBorder: yellowColors[3],
    colorWarningBorderHover: yellowColors[4],
    colorWarningHover: yellowColors[5],
    colorWarning: yellowColors[6],
    colorWarningActive: yellowColors[7],
    colorWarningTextHover: yellowColors[8],
    colorWarningText: yellowColors[9],
    colorWarningTextActive: yellowColors[10],

    colorSuccessBg: greenColors[1],
    colorSuccessBgHover: greenColors[2],
    colorSuccessBorder: greenColors[3],
    colorSuccessBorderHover: greenColors[4],
    colorSuccessHover: greenColors[5],
    colorSuccess: greenColors[6],
    colorSuccessActive: greenColors[7],
    colorSuccessTextHover: greenColors[8],
    colorSuccessText: greenColors[9],
    colorSuccessTextActive: greenColors[10],

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
      colorError: redColors[7],
      colorSuccess: greenColors[7],
      colorWarning: yellowColors[7],
    },
  },
  algorithm: lightAlgorithm,
};
