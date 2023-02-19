import { FC, lazy, Suspense } from 'react';

import { useSiteStore } from '../../store';

const Highlighter = lazy(() => import('../../components/Highlighter'));

interface SourceCodeProps {
  lang: string;
  children: string;
}

const SourceCode: FC<SourceCodeProps> = ({ children, lang }) => {
  const theme = useSiteStore((s) => s.siteData.themeConfig.syntaxTheme);

  return (
    <Suspense fallback={children}>
      <Highlighter syntaxThemes={theme} language={lang}>
        {children}
      </Highlighter>
    </Suspense>
  );
};

export default SourceCode;
