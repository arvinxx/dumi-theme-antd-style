import { Divider } from 'antd';
import { useResponsive } from 'antd-style';
import { type FC } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { IFooter } from '@/types';
import Foot, { FooterProps } from '../../components/Footer';
import { githubSel, useSiteStore } from '../../store';
import { getColumns } from './columns';
import { useStyles } from './style';

const Footer: FC = () => {
  const { themeConfig, pkg } = useSiteStore((s) => s.siteData);
  const githubUrl = useSiteStore(githubSel);

  const { styles, theme } = useStyles();
  const { mobile } = useResponsive();
  if (!themeConfig.footer) return null;

  const footer = themeConfig.footerConfig as IFooter;

  const columns = footer?.columns
    ? footer.columns
    : getColumns({ github: githubUrl || (pkg as any).homepage });

  // icons 为图片地址时，转为HTMLElement 函数
  const updateIconToImgElement = (item: any) => {
    if (
      item?.icon &&
      typeof item.icon === 'string' &&
      item.icon.match(/\.(png|jpeg|jpg|gif|svg|webp)$/) !== null
    ) {
      item.icon = <img src={item.icon} alt="" />;
    }
  };
  // 递归函数
  const updateIconsRecursively = (item: any) => {
    updateIconToImgElement(item);
    if (item?.items && item.items instanceof Array) {
      item.items.forEach((_item: any) => {
        updateIconsRecursively(_item);
      });
    }
  };
  // 处理图片地址
  columns.forEach(updateIconsRecursively);

  const bottomFooter = footer?.bottom || themeConfig.footer;
  const copyright = footer?.copyright || `Copyright © 2022-${new Date().getFullYear()}`;
  return (
    <Foot
      theme={footer?.theme || (theme.appearance as FooterProps['theme'])}
      columns={columns}
      bottom={
        mobile ? (
          <Center className={styles.container}>
            {copyright}
            <Flexbox
              align={'center'}
              horizontal
              dangerouslySetInnerHTML={{ __html: bottomFooter }}
            ></Flexbox>
          </Center>
        ) : (
          <Center horizontal>
            {copyright}
            <Divider type={'vertical'} />
            <span dangerouslySetInnerHTML={{ __html: bottomFooter }} />
          </Center>
        )
      }
    />
  );
};

export default Footer;
