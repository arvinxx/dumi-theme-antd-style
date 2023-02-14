import { createStyles } from 'antd-style';
import { IPreviewerProps } from 'dumi/dist/client/theme-api/types';
import Previewer from 'dumi/theme-default/builtins/Previewer';
import { rgba } from 'polished';

const useStyles = createStyles(
  ({ css, token, prefixCls }) => css`
    .dumi-default-previewer {
      border-color: ${token.colorBorderSecondary};

      &-demo {
        &[data-iframe]::before {
          background: ${token.colorFillContent};
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
      &-desc {
        .markdown {
          border-color: ${token.colorBorderSecondary};
        }

        h5 {
          background: linear-gradient(
            to top,
            ${token.colorBgContainer},
            ${rgba(token.colorBgContainer, 0.95)} 50%,
            ${rgba(token.colorBgContainer, 0)} 100%
          );

          a {
            color: ${token.colorText};
          }
        }
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
