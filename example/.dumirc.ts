import { defineConfig } from 'dumi';
import { homepage } from '../package.json';

import { features } from './config/features';

// 不是预览模式 同时是生产环境
const isProdSite = process.env.PREVIEW !== '1' && process.env.NODE_ENV === 'production';

const repoName = 'dumi-theme-antd-style';

const urlConfig = isProdSite
  ? {
      publicPath: `/${repoName}/`,
      base: `/${repoName}`,
    }
  : undefined;

export default defineConfig({
  themeConfig: {
    name: 'Ant Design Style Dumi Theme',
    logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    github: homepage,
    description: {
      'zh-CN': 'Ant Design Style 文档站主题包',
      'en-US': 'dumi2 theme similar to antd v5 website',
    },
    // actions: {
    //   'zh-CN': [
    //     {
    //       type: 'primary',
    //       text: '开始使用',
    //       link: '/guide/introduce',
    //     },
    //     {
    //       text: '配置',
    //       link: '/config/base',
    //     },
    //   ],
    //   'en-US': [
    //     {
    //       type: 'primary',
    //       text: 'Start',
    //       link: '/guide/introduce-en',
    //     },
    //     {
    //       text: 'Config',
    //       link: '/config/base-en',
    //     },
    //   ],
    // },
    features,
  },

  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  ],
  ...urlConfig,
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
});
