import { createCache, StyleProvider } from '@ant-design/cssinjs';
import { CacheProvider } from '@emotion/react';
import { styleManager } from 'antd-style';
import { useOutlet } from 'dumi';

const antdCache = createCache();

// @ts-ignore
global.__ANTD_CACHE__ = antdCache;

export default () => {
  const Outlet = useOutlet();

  return (
    <CacheProvider value={styleManager.cache}>
      <StyleProvider cache={antdCache}>{Outlet}</StyleProvider>
    </CacheProvider>
  );
};
