import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Tooltip } from 'antd';
import copy from 'copy-to-clipboard';
import { FC } from 'react';

import Highlighter from '../../components/Highlighter';
import { useCopied } from '../../hooks/useCopied';
import { useStyles } from './style';

interface SourceCodeProps {
  lang: string;
  children: string;
}
const SourceCode: FC<SourceCodeProps> = ({ children, lang: language }) => {
  const { copied, setCopied } = useCopied();
  const { styles, theme } = useStyles();

  return (
    <div className={styles.container}>
      <Tooltip
        placement={'left'}
        showArrow={false}
        align={{ offset: [5, 0] }}
        title={
          copied ? (
            <>
              <CheckOutlined style={{ color: theme.colorSuccess }} /> 复制成功
            </>
          ) : (
            '复制'
          )
        }
      >
        <ConfigProvider theme={{ token: { colorBgContainer: theme.colorBgElevated } }}>
          <Button
            icon={<CopyOutlined />}
            className={styles.button}
            onClick={() => {
              copy(children);
              setCopied();
            }}
          />
        </ConfigProvider>
      </Tooltip>
      <Highlighter language={language}>{children}</Highlighter>
    </div>
  );
};

export default SourceCode;
