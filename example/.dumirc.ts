import { defineConfig } from 'dumi';
import { homepage } from '../package.json';

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
    name: repoName,
    logo: 'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    github: homepage,

    // sidebarGroupModePath: ['/config'],
    title: 'Dumi Theme - <b>Ant Design Style</b>',
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
    features: [
      {
        title: 'style-component 与 Emotion 双样式引擎',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*MvKkQqXEyfQAAAAAAAAAAAAADoN6AQ/original',
        description:
          'Ant Design Style 采用 styled-component 和 emotion 双样式引擎，兼具丰富的写法能力与性能表现',
        link: '/guide/strategy',
        imageStyle: 'light',
        row: 8,
      },
      {
        title: '暗色模式一键切换',
        link: '/guide/switch-theme',
        description:
          '我们基于 antd v5 cssinjs 动态主题配置与暗色主题算法封装了，为应用级场景提供易用的亮暗色主题切换能力，使用方式更加简单。',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*8KE7T7l39J0AAAAAAAAAAAAADoN6AQ/original',
        imageStyle: 'primary',
      },
      {
        title: '主题灵活扩展',
        description:
          'Ant Design Style 提供自定义 token 与 自定义 stylish 的功能，当 antd 默认的 token 不能满足样式诉求时，可以灵活扩展出自己的主题体系，并在 CSS in JS 中自由消费。',
        link: '/guide/custom-theme',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*6sjjRa7lLhAAAAAAAAAAAAAADoN6AQ/original',
        imageStyle: 'primary',
        row: 8,
      },
      {
        title: 'Ant Design Token System',
        link: '/guide/switch-theme',
        description: '默认集成 Ant Design V5 的 Token System，主题定制轻而易举，token 消费灵活易用',
        avatar:
          'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
        imageStyle: 'light',
        row: 7,
        center: true,
      },
      {
        title: '复合样式 —— Stylish',
        description:
          'Ant Design Style 提供了复合样式的能力，我们称它为 Stylish。Stylish 可以通过组合多个原子 token 来组织形成复杂的交互样式，实现极高的复用度。<quotient> 感觉很熟悉？没错，它和 tailwindcss 的思想高度一致，但 stylish 将会具有更加明确的设计语义，维护也会更加轻松。</quotient>',
        link: '/guide/stylish',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*_in2RLf5pY8AAAAAAAAAAAAADoN6AQ/original',
        imageStyle: 'primary',
        row: 9,
      },
      {
        title: 'less 平滑迁移',
        description:
          '旧项目需要迁移？使用 antd-style 可以将项目中的 less 较低成本地迁移到 CSS in JS，并获得更好的用户体验与开发体验。',
        link: '/guide/migrate-from-less',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original',
        imageStyle: 'primary',
      },
      {
        title: '微应用良好兼容',
        description:
          'Ant Design Style 默认兼容 qiankun 微应用（但会牺牲一点性能）。同时并为不需要微应用的使用场景提供性能优化选项。',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*tZNeQIUYx_4AAAAAAAAAAAAADoN6AQ/original',
        imageStyle: 'primary',
        row: 6,
      },
      {
        title: '应用案例',
        description:
          '展示使用 Ant Design Style 的组件、应用的各种案例，帮助开发者快速上手。<quotient> 本文档同样使用 Ant Design Style 构建样式，可以作为静态站点类的参考。</quotient>',
        link: '/case',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original',
        imageStyle: 'soon',
        row: 8,
      },
      {
        title: '响应式轻松适配',
        description:
          'Ant Design Style 将为响应式应用提供便捷的工具函数，帮助开发者快速完成响应式主题开发。',
        avatar:
          'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*5H2ySLO-X4cAAAAAAAAAAAAADoN6AQ/original',
        row: 6,
      },
    ],
    // features: {
    //   'zh-CN': [
    //     {
    //       title: '内置全文搜索',
    //       details:
    //         '不需要接入任何三方服务，标题、正文、demo 等内容均可被搜索，支持多关键词搜索，且不会带来产物体积的增加。',
    //     },
    //     {
    //       title: '更好的编译性能',
    //       details:
    //         '通过结合使用 Umi 4 MFSU、esbuild、SWC、持久缓存等方案，带来比 dumi 1.x 更快的编译速度。',
    //     },
    //     {
    //       title: '开箱即用',
    //       details: '接入简单，安装即使用，全面融入 Ant Design 风格。',
    //     },
    //   ],
    //   'en-US': [
    //     {
    //       title: 'Built-in Full-Text search',
    //       details:
    //         'There is no need to access any third-party services, and the contents such as title, text, demo, etc. can be searched, which supports multi-keyword search and will not increase the product volume.',
    //     },
    //     {
    //       title: 'Better Compilation Performance',
    //       details:
    //         'By combining Umi 4 MFSU, esbuild, SWC, persistent cache and other schemes, it brings faster compilation speed than dumi1.x.',
    //     },
    //     {
    //       title: 'Simple Use',
    //       details:
    //         'Simple access, installation and use, fully integrated into Ant Design 5.0 style.',
    //     },
    //   ],
    // },
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
