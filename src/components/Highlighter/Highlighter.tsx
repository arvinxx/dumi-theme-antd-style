import { Loading3QuartersOutlined as Loading } from '@ant-design/icons';
import { useThemeMode } from 'antd-style';
import { memo, useMemo, useState } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { useStyles } from './Highlighter.style';
import { Prism } from './Prism';
import { useShiki } from './useShiki';

export interface HighlighterProps {
  children: string;
  language: string;
  /**
   * 语法高亮器类型
   * @default 'shiki'
   */
  type?: 'shiki' | 'prism';
}

const Highlighter = memo<HighlighterProps>(({ children, language }) => {
  const { styles, theme } = useStyles();
  const { isDarkMode } = useThemeMode();
  const [loading, setLoading] = useState(false);

  const { codeToHtml } = useShiki({ onLoadingChange: setLoading });

  const html = useMemo(
    () => codeToHtml(children, language, isDarkMode) || '',
    [codeToHtml, children, isDarkMode, language],
  );

  // const highlighter = type === 'prism' ? Prism : Highlighter;
  return (
    <Flexbox className={styles.container}>
      {loading ? (
        <Prism language={language}>{children}</Prism>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html }} className={styles.shiki} />
      )}
      {loading && (
        <Center className={styles.loading}>
          <Loading spin style={{ color: theme.colorTextTertiary }} />
        </Center>
      )}
    </Flexbox>
  );
});

export default Highlighter;
