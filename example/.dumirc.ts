import { defineConfig } from 'dumi';
import type { SiteThemeConfig } from 'dumi-theme-antd-style';
import path from 'path';

import { homepage, name } from '../package.json';

const isProd = process.env.NODE_ENV === 'production';

const themeConfig: SiteThemeConfig = {
  name: 'Ant Design Style Dumi Theme',
  logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',

  socialLinks: { github: homepage },
  apiHeader: {
    pkg: name,
    sourceUrl: `{github}/tree/master/src/components/{atomId}/index.tsx`,
    docUrl: `{github}/tree/master/example/docs/components/{atomId}.{locale}.md`,
  },
  footer: 'Made with ❤️ by 蚂蚁集团 - AFX & 数字科技',
};

export default defineConfig({
  themeConfig,
  html2sketch: {},
  favicons: [
    'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
  ],
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'zh-CN', name: '中文' },
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
