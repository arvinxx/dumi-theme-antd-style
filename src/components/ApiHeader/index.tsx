import { EditOutlined, GithubFilled } from '@ant-design/icons';
import { Divider, Space, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import { FC, memo, ReactNode } from 'react';
import { Flexbox } from 'react-layout-kit';

import Code from '../CodeSnippet';
import NpmFilled from './NpmFilled';

import { Label, useStyles } from './style';

interface ApiTitleProps {
  title: string;
  componentName: string;
  description?: string;
  pkg: string;
  sourceUrl?: string;
  docsUrl?: string;
}

interface Item {
  label: string;
  icon: ReactNode;
  children: string;
  url: string;
}

export const ApiHeader: FC<ApiTitleProps> = memo(
  ({ title, componentName, description, pkg, sourceUrl, docsUrl }) => {
    const { styles } = useStyles();
    const { mobile } = useResponsive();

    const items = [
      sourceUrl && {
        label: '源码',
        icon: <GithubFilled />,
        children: '查看源码',
        url: sourceUrl,
      },
      docsUrl && {
        label: '文档',
        icon: <EditOutlined />,
        children: '编辑文档',
        url: docsUrl,
      },
      {
        label: '产物',
        icon: <NpmFilled />,
        children: pkg,
        url: `https://www.npmjs.com/package/${pkg}?activeTab=explore`,
      },
    ].filter((i) => i) as Item[];

    return (
      <Flexbox>
        <Typography.Title className={styles.title}>{title}</Typography.Title>
        {description && (
          <div>
            <Typography.Text type={'secondary'} className={styles.desc}>
              {description}
            </Typography.Text>
          </div>
        )}
        <Flexbox style={{ marginTop: 24 }} gap={mobile ? 16 : 24}>
          <Flexbox horizontal={!mobile} gap={mobile ? 12 : 0}>
            <Label type={'secondary'} style={{ display: 'flex', alignItems: 'center' }}>
              引入方法
            </Label>
            <Code>{`import { ${componentName} } from "${pkg}";`}</Code>
          </Flexbox>
          <Divider dashed style={{ margin: '2px 0' }} />
          <Space
            direction={mobile ? 'vertical' : 'horizontal'}
            split={mobile ? undefined : <Divider type={'vertical'} />}
            size={24}
            className={styles.meta}
          >
            {items.map((item) => (
              <Space size={24} key={item.label}>
                <Label type={'secondary'}>{item.label}</Label>
                {
                  <a href={item.url} target={'_blank'} rel="noreferrer">
                    <Flexbox horizontal align={'center'} gap={8} className={styles.text}>
                      <>{item.icon}</>
                      <>{item.children}</>
                    </Flexbox>
                  </a>
                }
              </Space>
            ))}
          </Space>
        </Flexbox>
      </Flexbox>
    );
  },
);
