import { CSSProperties, type FC } from 'react';

import FeatureItem from 'dumi-theme-antd-style/components/Features/Item';
import { IFeature } from '../../types';
import { useStyles } from './style';

export interface FeaturesProps {
  items: IFeature[];
  style?: CSSProperties;
}

const Features: FC<FeaturesProps> = ({ items, style }) => {
  const { styles } = useStyles();

  if (!Boolean(items?.length)) return null;

  return (
    <div className={styles.container} style={style}>
      {items!.map((item) => {
        return <FeatureItem key={item.title} {...item} />;
      })}
    </div>
  );
};

export default Features;
