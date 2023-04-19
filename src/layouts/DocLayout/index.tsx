import { extractStaticStyle } from 'antd-style';
import { Helmet, useIntl, useLocation } from 'dumi';
import isEqual from 'fast-deep-equal';
import { PropsWithChildren, memo, useEffect, type FC } from 'react';

import DumiSiteProvider from '../../components/DumiSiteProvider';
import { StoreUpdater } from '../../components/StoreUpdater';

import Docs from '../../pages/Docs';
import Home from '../../pages/Home';

import { isHeroPageSel, tokenSel, useSiteStore } from '../../store';
import { GlobalStyle } from './styles';

const DocLayout: FC = memo(() => {
  const intl = useIntl();
  const { hash } = useLocation();
  const fm = useSiteStore((s) => s.routeMeta.frontmatter, isEqual);
  const isHomePage = useSiteStore(isHeroPageSel);
  const loading = useSiteStore((s) => s.siteData.loading);

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) {
      setTimeout(() => {
        const elm = document.getElementById(decodeURIComponent(id));

        if (elm) {
          elm.scrollIntoView();
          window.scrollBy({ top: -80 });
        }
      }, 1);
    }
  }, [loading, hash]);

  return (
    <>
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, '')} />
        {fm.title && <meta property="og:title" content={fm.title} />}
        {fm.description && <meta name="description" content={fm.description} />}
        {fm.description && <meta property="og:description" content={fm.description} />}
        {fm.keywords && <meta name="keywords" content={fm.keywords.join(',')} />}
        {fm.keywords && <meta property="og:keywords" content={fm.keywords.join(',')} />}
      </Helmet>

      {isHomePage ? <Home /> : <Docs />}
    </>
  );
});

// @ts-ignore
global.__ANTD_CACHE__ = extractStaticStyle.cache;

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const siteToken = useSiteStore(tokenSel, isEqual);

  return (
    <DumiSiteProvider cache={extractStaticStyle.cache} token={siteToken}>
      {children}
    </DumiSiteProvider>
  );
};

export default () => (
  <>
    <StoreUpdater />
    <ThemeProvider>
      <GlobalStyle />
      <DocLayout />
    </ThemeProvider>
  </>
);
