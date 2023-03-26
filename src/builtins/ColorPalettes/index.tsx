import chroma from 'chroma-js';
import { Flexbox } from 'react-layout-kit';

import { createStyles } from 'antd-style';
import { errorColors, primaryColors, successColors, warningColors } from '../../styles/theme/light';

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
function invertColor(color: string) {
  // 使用 Chroma.js 获取颜色的亮度
  const brightness = chroma(color).get('lab.l');

  // 判断颜色的亮度，如果亮度低于 50，则认为是暗色，生成亮色文本；反之，则生成暗色文本
  const invertedColor = brightness < 50 ? chroma(color).brighten(2) : chroma(color).darken(2);

  return invertedColor.hex();
}

const colorMaps = [
  { key: 'primary', colors: primaryColors },
  { key: 'error', colors: errorColors },
  { key: 'warning', colors: warningColors },
  { key: 'success', colors: successColors },
];
export default () => {
  const { styles } = useStyles();
  return (
    <Flexbox horizontal gap={40}>
      {colorMaps.map((map) => {
        return (
          <Flexbox key={map.key} align={'center'}>
            <div className={styles.title} style={{ color: map.colors[6] }}>
              {map.key}
            </div>
            <Flexbox className={styles.palette}>
              {map.colors.map((hex, index) => (
                <Flexbox
                  horizontal
                  align={'center'}
                  gap={24}
                  distribution={'space-between'}
                  key={hex}
                  style={{ background: hex, color: invertColor(hex) }}
                  className={styles.color}
                >
                  <Flexbox style={{ paddingLeft: 8 }}>{index}</Flexbox>
                  <Flexbox style={{ paddingRight: 12 }}>{hex}</Flexbox>
                </Flexbox>
              ))}
            </Flexbox>
          </Flexbox>
        );
      })}
    </Flexbox>
  );
};
