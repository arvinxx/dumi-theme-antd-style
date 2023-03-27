import { createStyles } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

import { FC } from 'react';
import { darkColorPalettes } from '../../styles/theme/dark';
import { lightColorPalettes } from '../../styles/theme/light';
import { invertColor } from './invertColor';

const useStyles = createStyles(({ css }) => ({
  title: css`
    height: 32px;
  `,
  palette: css`
    border-radius: 6px;
    overflow: hidden;
  `,
  color: css`
    width: 120px;
    height: 40px;
    font-family: Monaco, Consolas, 'Courier New', monospace;
  `,
}));

interface Palette {
  key: string;
  colors: string[];
}
const lightColorMaps: Palette[] = Object.entries(lightColorPalettes).map(([key, value]) => ({
  key,
  colors: value,
}));

const darkColorMaps: Palette[] = Object.entries(darkColorPalettes).map(([key, value]) => ({
  key,
  colors: value,
}));

const ColorItem = ({ color, index }: { color: string; index: number }) => {
  const { styles } = useStyles();
  return (
    <Flexbox
      horizontal
      align={'center'}
      gap={24}
      distribution={'space-between'}
      style={{ background: color, color: invertColor(color) }}
      className={styles.color}
    >
      <Flexbox style={{ paddingLeft: 8 }}>{index}</Flexbox>
      <Flexbox style={{ paddingRight: 12 }}>{color}</Flexbox>
    </Flexbox>
  );
};

interface ColorPaletteProps {
  palette: Palette[];
}
const ColorPalette: FC<ColorPaletteProps> = ({ palette }) => {
  const { styles } = useStyles();

  return (
    <Flexbox horizontal gap={40}>
      {palette.map((map) => {
        return (
          <Flexbox key={map.key} align={'center'}>
            <div className={styles.title} style={{ color: map.colors[6] }}>
              {map.key}
            </div>
            <Flexbox className={styles.palette}>
              {map.colors.map((hex, index) => (
                <ColorItem index={index} color={hex} key={hex} />
              ))}
            </Flexbox>
          </Flexbox>
        );
      })}
    </Flexbox>
  );
};

export default () => {
  return (
    <Flexbox gap={24}>
      <ColorPalette palette={lightColorMaps} />
      <ColorPalette palette={darkColorMaps} />
    </Flexbox>
  );
};
