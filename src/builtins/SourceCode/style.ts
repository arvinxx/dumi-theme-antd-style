import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, css, cx }) => {
  const prefixCls = 'source-code';
  const buttonHoverCls = `${prefixCls}-hover-btn`;

  return {
    container: cx(
      prefixCls,
      css`
        position: relative;

        pre {
          background: ${token.colorFillTertiary} !important;
          border-radius: 8px;
          padding: 12px !important;
        }

        &:hover {
          .${buttonHoverCls} {
            opacity: 1;
          }
        }
      `,
    ),
    button: cx(
      buttonHoverCls,
      css`
        opacity: 0;
        position: absolute;
        right: 8px;
        top: 8px;
        z-index: 50;
      `,
    ),
  };
});
