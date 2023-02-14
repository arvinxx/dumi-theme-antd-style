import { defineConfig } from 'dumi';
import path from 'path';

import { homepage } from '../package.json';

import { features } from './config/features';

export default defineConfig({
  themeConfig: {
    name: 'Ant Design Style Dumi Theme',
    logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    github: homepage,
    description: {
      'zh-CN': 'Ant Design Style 文档站主题包',
      'en-US': 'dumi2 theme similar to antd v5 website',
    },
    actions: {
      'zh-CN': [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide',
        },
        {
          text: '配置',
          link: '/config',
        },
      ],
      'en-US': [
        {
          type: 'primary',
          text: 'Start',
          link: '/guide-en',
        },
        {
          text: 'Config',
          link: '/config-en',
        },
      ],
    },
    features,
    apiHeader: {
      match: ['/components'],
    },
  },

  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  ],
  locales: [
    { id: 'zh-CN', name: '中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: '-en' },
  ],
  alias: {
    'dumi-theme-antd-style': path.join(__dirname, '../src'),
  },
});
