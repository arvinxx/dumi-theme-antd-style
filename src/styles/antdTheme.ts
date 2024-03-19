import { theme } from 'antd';
import { GetAntdTheme } from 'antd-style';

import { merge } from 'lodash';
import {
  CustomThemeAlgorithmParams,
  genDarkMapTokenAlgorithm,
  genMapTokenAlgorithm,
} from './algorithms';

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

export const createAntdTheme = (params?: CustomThemeAlgorithmParams): GetAntdTheme => {
  const innerParams = merge(
    {
      colorPrimary: '1677FF',
      adjustWarning: true,
      infoColorFollowPrimary: false,
    },
    params,
  );
  return (appearance) => {
    if (appearance === 'dark') {
      return {
        token: {
          colorPrimary: innerParams.colorPrimary,
          colorTextBase: '#dcdcf2',
          colorBgBase: '#050608',
        },
        algorithm: (seedToken, mapToken) => ({
          ...theme.darkAlgorithm(seedToken, mapToken),

          ...genDarkMapTokenAlgorithm({ brandColor: seedToken.colorPrimary, ...innerParams })
            .tokens,

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
        }),
      };
    }

    return {
      token: {
        colorPrimary: innerParams.colorPrimary,
        // colorTextBase: '#2a2e36',
      },

      algorithm: (seedToken, mapToken) => ({
        ...mapToken!,
        ...genMapTokenAlgorithm({ brandColor: seedToken.colorPrimary, ...innerParams }).tokens,
      }),
    };
  };
};
