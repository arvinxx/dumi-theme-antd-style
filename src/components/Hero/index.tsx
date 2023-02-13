import { Button, ConfigProvider } from 'antd';
import { Link } from 'dumi';
import { type FC } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import HeroButton from './HeroButton';

import { useStyles } from './style';

export interface HeroProps {
  title?: string;
  description?: string;
  actions?: { text: string; link: string }[];
}

const Hero: FC<HeroProps> = ({ title, description, actions }) => {
  const { styles, cx } = useStyles();

  return (
    <Flexbox horizontal distribution={'center'} className={styles.container}>
      <div className={styles.canvas}></div>
      <Center>
        {title && (
          <div className={styles.titleContainer}>
            <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
            <div
              className={cx(styles.titleShadow)}
              dangerouslySetInnerHTML={{ __html: title }}
            ></div>
          </div>
        )}
        {description && (
          <p className={styles.desc} dangerouslySetInnerHTML={{ __html: description }} />
        )}
        {Boolean(actions?.length) && (
          <ConfigProvider theme={{ token: { fontSize: 16, controlHeight: 40 } }}>
            <Flexbox horizontal gap={24} className={styles.actions}>
              {actions!.map(({ text, link }, index) => (
                <Link key={text} to={link}>
                  {index === 0 ? (
                    <HeroButton>{text}</HeroButton>
                  ) : (
                    <Button size={'large'} shape={'round'} type={'default'}>
                      {text}
                    </Button>
                  )}
                </Link>
              ))}
            </Flexbox>
          </ConfigProvider>
        )}
      </Center>
    </Flexbox>
  );
};

export default Hero;
