---
title: ApiHeader
group: Custom
nav: Configuration
---

# Custom ApiHeader

In some business scenarios ([issue #9](https://github.com/arvinxx/dumi-theme-antd-style/issues/9#issuecomment-1459116041)), users of the theme package may need to customize some content in ApiHeader. This can be achieved by customizing the slot.

Create a `ApiHeader` folder in the `.dumi/theme/slots` directory and add an `index.tsx` file. Then add the following code to customize the display of ApiHeader:

```tsx | pure
//.dumi/theme/slots/ApiHeader/index.tsx

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

For the complete configuration of the ApiHeader component, please refer to the [ApiHeader](/components/api-header) component documentation.
