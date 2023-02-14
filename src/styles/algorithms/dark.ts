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

    colorLink: primaryColors[6],
    colorLinkHover: primaryColors[5],
    colorLinkActive: primaryColors[7],

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
  };
};
