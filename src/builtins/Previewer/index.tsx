import { createStyles } from 'antd-style';
import { IPreviewerProps } from 'dumi/dist/client/theme-api/types';
import Previewer from 'dumi/theme-default/builtins/Previewer';

const useStyles = createStyles(
  ({ css, token, prefixCls }) => css`
    .dumi-default-previewer {
      border-color: ${token.colorBorderSecondary};

      &-demo {
        &[data-iframe]::before {
          background: ${token.colorBgElevated};
        }
      }
      &-meta {
        border-color: ${token.colorBorderSecondary};
        .${prefixCls}-highlighter {
          pre {
            border-radius: 0;
          }
        }
      }

      &-actions:not(:last-child) {
        border-color: ${token.colorBorderSecondary};
      }
    }
  `,
);

export default (props: IPreviewerProps) => {
  const { styles } = useStyles();

  return (
    <div className={styles}>
      <Previewer {...props} />
    </div>
  );
};
