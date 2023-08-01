import { CSSProperties, type FC } from 'react';

import { IFeature } from '../../types';
import FeatureItem from './Item';
import { useStyles } from './style';

/**
 * @title Features Props
 */
export interface FeaturesProps {
  /**
   * @title Feature items
   * @description An array of feature items
   */
  items: IFeature[];
  /**
   * @title Style
   */
  style?: CSSProperties;
}

const Features: FC<FeaturesProps> = ({ items, style }) => {
  const { styles } = useStyles();

  if (!Boolean(items?.length)) return null;

  console.log('items', items);

  return (
    <div className={styles.container} style={style}>
      {items!.map((item: any) => {
        return item.isTitle ? (
          <h1 style={{ gridArea: 'span 3 / span 3', textAlign: 'center' }}>{item.title}</h1>
        ) : (
          <FeatureItem key={item.title} {...item} />
        );
      })}
    </div>
  );
};

export default Features;
