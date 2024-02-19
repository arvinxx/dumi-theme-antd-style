import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, prefixCls, css, cx }) => {
  const prefix = `${prefixCls}-home-contents`;

  return {
    container: cx(
      prefix,
      css`
        width: 100%;
        max-width: ${token.contentMaxWidth}px;
        padding: 0 16px;
        box-sizing: border-box;
      `,
    ),
  };
});
