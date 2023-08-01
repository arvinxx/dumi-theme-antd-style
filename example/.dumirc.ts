import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import path from 'path';

import { homepage, name } from '../package.json';

import { featuresZh } from './config/features';
import { footer } from './config/footer';


const isProd = process.env.NODE_ENV === 'production';

const themeConfig: SiteThemeConfig = {
  name: '帮助中心',
  logo: 'https://www.dev.multiway-cloud.com/assets/png/logo_origin-ea0ecb9a.png',

  hero: {
    'zh-CN': {
      description: '快速找到解决方案，轻松解决问题',
      actions: [
        {
          type: 'primary',
          text: '开始使用',
          link: '/guide',
        },
      ],
      features: featuresZh,
      
    },
    'en-US': {
      description: 'dumi2 theme similar to antd v5 website',
      actions: [
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
  },
  socialLinks: { github: homepage },
  apiHeader: {
    pkg: name,
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
  },
  footerConfig:{
    columns:footer,
    bottom: 'Made with ❤️ by 劢微机器人前端团队'
  },
};

export default defineConfig({
  themeConfig,
  html2sketch: {},
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
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #0E1116; }
  }`,
  ],
  extraBabelPlugins: ['antd-style'],
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  // @ts-ignore
  ssr: isProd ? {} : false,
});
