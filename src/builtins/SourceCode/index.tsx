import { CheckOutlined, CopyOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Tooltip } from 'antd';
import copy from 'copy-to-clipboard';
import { FC } from 'react';

import { Highlighter } from '../../components/Highlighter';
import { useCopied } from '../../hooks/useCopied';
import { useStyles } from './style';

interface SourceCodeProps {
  lang: string;
  children: string;
}

const SourceCode: FC<SourceCodeProps> = ({ children, lang }) => {
  const { copied, setCopied } = useCopied();
  const { styles, theme } = useStyles();

  return (
    <div className={styles.container}>
      <ConfigProvider theme={{ token: { colorBgContainer: theme.colorBgElevated } }}>
        <Tooltip
          placement={'left'}
          arrow={false}
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
          <Button
            icon={<CopyOutlined />}
            className={styles.button}
            onClick={() => {
              copy(children);
              setCopied();
            }}
          />
        </Tooltip>
      </ConfigProvider>

      <Highlighter language={lang}>{children}</Highlighter>
    </div>
  );
};

export default SourceCode;
