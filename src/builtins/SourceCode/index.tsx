import { FC } from 'react';

import { Highlighter } from '../../components/Highlighter';

interface SourceCodeProps {
  lang: string;
  children: string;
}

const SourceCode: FC<SourceCodeProps> = ({ children, lang }) => {
  return <Highlighter language={lang}>{children}</Highlighter>;
};

export default SourceCode;
