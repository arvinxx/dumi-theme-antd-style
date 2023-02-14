import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, cx, prefixCls }) => {
  const prefix = `${prefixCls}-highlighter`;

  return {
    container: cx(
      prefix,
      css`
        position: relative;
        pre {
          margin: 0 !important;
        }
      `,
    ),

    shiki: cx(
      `${prefix}-shiki`,
      css`
        .shiki {
          overflow: scroll;
        }
      `,
    ),

    loading: css`
      position: absolute;
      bottom: 8px;
      right: 8px;
    `,
  };
});
