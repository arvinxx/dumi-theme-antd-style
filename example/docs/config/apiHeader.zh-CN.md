---
title: ApiHeader
group: 自定义
nav: 配置
---

# 自定义 ApiHeader

在一些业务场景下（[issue #9](https://github.com/arvinxx/dumi-theme-antd-style/issues/9#issuecomment-1459116041)），主题包用户可能需要自定义 ApiHeader 中的部分内容。 此时可以通过自定义 slot 来实现。

在 `.dumi/theme/slots` 目录下创建 `ApiHeader` 文件夹，并添加 `index.tsx` 文件。然后添加以下代码，即可自定义 ApiHeader 的展示：

```tsx | pure
import { SmileOutlined } from '@ant-design/icons';
import { ApiHeader as Header, siteSelectors, useSiteStore } from 'dumi-theme-antd-style';
import { FC, memo } from 'react';

const ApiHeader: FC = memo(() => {
  const props = useSiteStore(siteSelectors.apiHeader);
  const { pkg } = props;

  const packages = [
    {
      label: 'icon',
      icon: <SmileOutlined />,
      children: 'demo',
      url: `https://www.npmjs.com/package/${pkg}`,
    },
  ];

  return <Header serviceList={packages} {...props} />;
});

export default ApiHeader;
```

关于 ApiHeader 组件的完整配置，请参考 [ApiHeader](/components/api-header) 组件文档。
