import { createStyles } from 'antd-style';

export const useStyles = createStyles(
  ({ css, responsive, token }) => css`
    display: inline-flex;
    align-items: center;
    font-family: AliPuHui, ${token.fontFamily};
    color: ${token.colorText};
    font-size: 22px;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    gap: 10px;

    ${responsive.mobile} {
      font-size: 18px;
    }
  `,
);
