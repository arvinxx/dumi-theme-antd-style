import { useDebounceFn } from 'ahooks';
import { Checkbox, ColorPicker, Divider, Radio, Space } from 'antd';
import { Center, Flexbox } from 'react-layout-kit';

import { createStyles } from 'antd-style';
import { shallow } from 'zustand/shallow';
import {
  darkColorPalettesSel,
  lightColorPalettesSel,
  useThemeStore,
} from '../../store/useThemeStore';
import ColorPalette from './ColorPalette';
import { useStore } from './store';

const useStyles = createStyles(
  ({ css, token }) => css`
    cursor: pointer;
    font-family: ${token.fontFamilyCode};
    border-radius: 6px;

    :hover {
      background: ${token.colorFillContent};
    }
  `,
);

const swatches = [
  '#1677FF',
  '#868e96',
  '#fa5252',
  '#e64980',
  '#be4bdb',
  '#7950f2',
  '#4c6ef5',
  '#228be6',
  '#15aabf',
  '#12b886',
  '#40c057',
  '#82c91e',
  '#fab005',
  '#fd7e14',
];
export default () => {
  const { mode } = useStore();

  const [colorPrimary, adjustWarning, infoColorFollowPrimary] = useThemeStore(
    (s) => [s.colorPrimary, s.adjustWarning, s.infoColorFollowPrimary],
    shallow,
  );
  const lightColorMaps = useThemeStore(lightColorPalettesSel);
  const darkColorMaps = useThemeStore(darkColorPalettesSel);

  const { styles } = useStyles();

  const { run: updateColor } = useDebounceFn(
    (color) => {
      useThemeStore.setState({ colorPrimary: color });
    },
    { wait: 150 },
  );

  return (
    <Flexbox>
      <Flexbox
        horizontal
        distribution={'space-between'}
        align={'center'}
        style={{ marginBottom: 8 }}
      >
        <Space split={<Divider type={'vertical'} />}>
          <ColorPicker
            value={colorPrimary}
            onChange={(value, hex) => {
              updateColor(hex);
            }}
            presets={[{ label: '预设', colors: swatches }]}
          >
            <Flexbox horizontal align={'center'}>
              主色：
              <Flexbox
                gap={4}
                horizontal
                align={'center'}
                paddingInline={6}
                paddingBlock={2}
                className={styles}
              >
                <div
                  style={{
                    background: colorPrimary,
                    width: 14,
                    height: 14,
                    borderRadius: 16,
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1.5px inset',
                  }}
                />
                {colorPrimary}
              </Flexbox>
            </Flexbox>
          </ColorPicker>

          <Checkbox
            checked={adjustWarning}
            onChange={(e) => {
              useThemeStore.setState({ adjustWarning: e.target.checked });
            }}
          >
            微调黄色
          </Checkbox>
          <Checkbox
            checked={infoColorFollowPrimary}
            onChange={(e) => {
              useThemeStore.setState({ infoColorFollowPrimary: e.target.checked });
            }}
          >
            信息色跟随主色
          </Checkbox>
        </Space>
        <Flexbox align={'center'} horizontal gap={12}>
          色彩模型
          <Radio.Group
            value={mode}
            options={[
              { label: 'OKLCH', value: 'oklch' },
              { label: 'HEX', value: 'hex' },
              { label: 'HSL', value: 'hsl' },
              { label: 'HSV', value: 'hsv' },
            ]}
            onChange={(e) => {
              useStore.setState({ mode: e.target.value });
            }}
          />
        </Flexbox>
      </Flexbox>
      <Center padding={24} style={{ background: '#fafafa' }}>
        <ColorPalette palette={lightColorMaps} />
      </Center>
      <Center padding={24} style={{ background: '#000' }}>
        <ColorPalette palette={darkColorMaps} />
      </Center>
    </Flexbox>
  );
};
