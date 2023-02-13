import { useThemeMode } from 'antd-style';
import { memo } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { languageMap } from 'dumi-theme-antd-style/components/Highlighter/language';

Object.entries(languageMap).forEach(([key, value]) => {
  SyntaxHighlighter.registerLanguage(key, value);
});

export interface HighlighterProps {
  children: string;
  language: string;
}
export const Prism = memo<HighlighterProps>(({ children, language }) => {
  const { isDarkMode } = useThemeMode();

  return (
    <SyntaxHighlighter language={language} style={isDarkMode ? oneDark : oneLight}>
      {children}
    </SyntaxHighlighter>
  );
});
