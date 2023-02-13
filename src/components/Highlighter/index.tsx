import { useThemeMode } from 'antd-style';
import { memo } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import less from 'react-syntax-highlighter/dist/cjs/languages/prism/less';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';

SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('jsx', javascript);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('less', less);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('diff', diff);
SyntaxHighlighter.registerLanguage('bash', bash);

export interface HighlighterProps {
  children: string;
  language: string;
}
const Highlighter = memo<HighlighterProps>(({ children, language }) => {
  const { isDarkMode } = useThemeMode();

  return (
    <SyntaxHighlighter language={language} style={isDarkMode ? oneDark : oneLight}>
      {children}
    </SyntaxHighlighter>
  );
});

export default Highlighter;
