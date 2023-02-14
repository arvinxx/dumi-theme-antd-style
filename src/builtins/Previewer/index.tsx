import { createStyles } from 'antd-style';
import { IPreviewerProps } from 'dumi/dist/client/theme-api/types';
import Previewer from 'dumi/theme-default/builtins/Previewer';

const useStyles = createStyles(
  ({ css, prefixCls }) => css`
    .dumi-default-previewer-meta {
      .${prefixCls}-highlighter {
        pre {
          border-radius: 0;
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
