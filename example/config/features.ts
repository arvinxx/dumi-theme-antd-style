import { IFeature } from 'dumi-theme-antd-style';

export const featuresZh: IFeature[] = [
  {
    title: '现代化主题风格',
    image: '💠',
    description:
      '本主题包采用了流动色、毛玻璃、光影质感、自然动效等现代化的设计表现手法，将界面以更加简约、美观的方式呈现，使得文档更加直观、易读、易用',
    row: 6,
  },
  {
    title: '基于 Ant Design 与 CSSinJS',
    description:
      '本主题包使用 antd 作为基础组件库，并使用了 CSSinJS 实现样式方案，帮助更好地控制样式的细节，提高样式的复用性和可维护性。底层使用了 antd-style 样式库，在书写样式上更加灵活、可读、易于维护。<quotient>本主题包算是开发 antd-style 时的一个副产物</quotient>',
    link: '/guide/style',
    imageType: 'light',
    image:
      'https://gw.alipayobjects.com/zos/hitu-asset/c88e3678-6900-4289-8538-31367c2d30f2/hitu-1609235995955-image.png',
    row: 9,
  },
  {
    title: '亮暗色主题模式一键切换',
    link: '/guide/theme',
    description:
      '本文档基于 antd v5 自定义了亮色与暗色主题算法，默认提供美观易用的亮暗色主题。用户可以根据自己的喜好选择主题模式，在不同的光线环境下都能获得良好的阅读体验。',
    image:
      'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*8KE7T7l39J0AAAAAAAAAAAAADoN6AQ/original',
    imageType: 'primary',
  },
  {
    title: '精美的语法高亮',
    description:
      '本主题包提供准确、精美的语法高亮特性。底层采用了现代化的语法高亮库 Shiki 与 Prism，并提供了丰富的代码高亮方案，帮助用户更好地阅读代码 <quotient>后续会考虑支持代码块片段高亮、关键词高亮等特性</quotient>',
    link: '/guide/syntax-highlighter',
    image:
      'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*1qLNRrRGFsQAAAAAAAAAAAAADoN6AQ/original',
    imageType: 'primary',
    row: 9,
  },
  {
    title: '组件灵活复用',
    description:
      '本主题包为本地主题定制提供了很高的灵活度，默认导出了主题包中的精品组件，可以将组件作为独立的模块进行复用，开发者可以在 dumi 本地主题包中自由组合使用',
    image:
      'https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*6sjjRa7lLhAAAAAAAAAAAAAADoN6AQ/original',
    imageType: 'primary',
    link: '/components',
    row: 8,
  },
  {
    title: '移动端适配良好',
    description:
      '本主题包对移动端适配良好，基于 CSSinJS 的灵活样式方案，多套布局实现轻而易举。用户多端操作体验一致且顺滑',
    image: '📱',
    imageType: 'light',
    row: 6,
    hero: true,
  },
];
