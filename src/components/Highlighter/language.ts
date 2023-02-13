import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import diff from 'react-syntax-highlighter/dist/cjs/languages/prism/diff';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import less from 'react-syntax-highlighter/dist/cjs/languages/prism/less';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';

export const languageMap = {
  javascript: javascript,
  jsx: javascript,
  json: json,
  markdown: markdown,
  less: less,
  typescript: typescript,
  tsx: tsx,
  diff: diff,
  bash: bash,
};
