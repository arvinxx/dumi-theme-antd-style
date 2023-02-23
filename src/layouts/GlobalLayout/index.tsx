import { createCache, StyleProvider } from '@ant-design/cssinjs';
import { useOutlet } from 'dumi';

const antdCache = createCache();

// @ts-ignore
global.__ANTD_CACHE__ = antdCache;

export default () => {
  const Outlet = useOutlet();

  return <StyleProvider cache={antdCache}>{Outlet}</StyleProvider>;
};
