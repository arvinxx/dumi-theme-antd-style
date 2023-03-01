import { Divider } from 'antd';
import { useResponsive } from 'antd-style';
import { type FC } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { IFooter } from '@/types';
import Foot, { FooterProps } from '../../components/Footer';
import { useSiteStore } from '../../store';
import { getColumns } from './columns';
import { useStyles } from './style';

const Footer: FC = () => {
  const { themeConfig, pkg } = useSiteStore((s) => s.siteData);

  const { styles, theme } = useStyles();
  const { mobile } = useResponsive();
  if (!themeConfig.footer) return null;

  const footer = themeConfig.footerConfig as IFooter;

  const columns =
    footer.columns === false
      ? []
      : getColumns({ github: themeConfig.github || (pkg as any).homepage });

  const bottomFooter = typeof footer === 'object' ? footer.bottom : themeConfig.footer;

  return (
    <Foot
      theme={footer.theme || (theme.appearance as FooterProps['theme'])}
      columns={columns}
      bottom={
        mobile ? (
          <Center className={styles.container}>
            Copyright © 2022-{new Date().getFullYear()}
            <Flexbox
              align={'center'}
              horizontal
              dangerouslySetInnerHTML={{ __html: bottomFooter }}
            ></Flexbox>
          </Center>
        ) : (
          <Center horizontal>
            Copyright © 2022-{new Date().getFullYear()} <Divider type={'vertical'} />
            <span dangerouslySetInnerHTML={{ __html: bottomFooter }} />
          </Center>
        )
      }
    />
  );
};

export default Footer;
