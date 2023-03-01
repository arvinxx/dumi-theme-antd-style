---
title: ApiHeader
description: ApiHeader clearly presents the basic usage of an API along with the API's documentation and source code URLs, enabling users to quickly understand how to use the API.
order: 10
group: Features
atomId: Button
apiHeader:
  pkg: antd
  docUrl: https://github.com/ant-design/ant-design/blob/master/components/button/index.zh-CN.md
  sourceUrl: https://github.com/ant-design/ant-design/blob/master/components/button/button.tsx
---

# ApiHeader

This component provides an `apiHeader` configuration option for setting the documentation and source code URLs.

## API Header Configuration

### Default Usage

To enable this feature, add the `apiHeader` configuration option to `themeConfig`.

See [Advanced Configuration - apiHeader](/config#apiheader) for detailed configuration options.

### FrontMatter Configuration

For specific documentation configurations, such as monorepo or special file sections, add the `apiHeader` metadata tag to the markdown front matter to declare the component.

```md
---
apiHeader:
  pkg: antd # The imported component library
  defaultImport: true # When defaultImport is enabled, import XXX from 'xxx'; syntax will be used
  docUrl: https://github.com/xxx/xxx # The URL of the markdown document
  sourceUrl: https://path/to/soure.tsx # The URL of the source code of the method
---
```

### Component Usage

See API document for more details: [ApiHeader](/components/api-header)
