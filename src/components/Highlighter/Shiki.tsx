import { useThemeMode } from 'antd-style';
import { memo, useEffect, useMemo, useState } from 'react';
import { getHighlighter, Highlighter } from 'shiki-es';
import { Prism } from './Prism';

import { languageMap } from './language';

export interface HighlighterProps {
  children: string;
  language: string;
}

const ShikiHighlighter = memo<HighlighterProps>(({ children, language }) => {
  const { isDarkMode } = useThemeMode();
  const [loading, setLoading] = useState(true);

  const [shikiInstance, setInstance] = useState<Highlighter>();

  const initHighlighter = async () => {
    const instance = await getHighlighter({
      theme: isDarkMode ? 'github-dark' : 'github-light',
      langs: Object.keys(languageMap) as any,
      themes: ['github-dark', 'github-light'],
    });

    setInstance(instance);

    setLoading(false);
  };

  // 初始化 Shiki HightLighter
  useEffect(() => {
    initHighlighter();
  }, [isDarkMode]);

  const html = useMemo(
    () =>
      shikiInstance?.codeToHtml(children, {
        lang: language,
        theme: isDarkMode ? 'github-dark' : 'github-light',
      }) || '',
    [shikiInstance, children, isDarkMode, language],
  );

  return loading ? (
    <Prism language={language}>{children}</Prism>
  ) : (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  );
});

export default ShikiHighlighter;
