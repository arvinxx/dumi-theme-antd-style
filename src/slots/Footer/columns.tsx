import {
  GithubOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  MediumOutlined,
  TwitterOutlined,
  ZhihuOutlined,
} from '@ant-design/icons';
import { Link } from 'dumi';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

interface GetColumnParams {
  github?: string;
}
export const getColumns = ({ github }: GetColumnParams) => {
  const resources: FooterColumn = {
    title: '相关资源',
    items: [
      {
        title: '新能源',
        url: 'https://www.mw-robot.com/ServerSt_xny.html',
        openExternal: true,
      },
      {
        title: '汽车',
        url: 'https://www.mw-robot.com/ServerSt_qc.html',
        openExternal: true,
      },
      {
        title: '医药',
        description: '',
        url: 'https://www.mw-robot.com/ServerSt_yl.html',
        openExternal: true,
      },
      {
        title: '食品',
        url: 'https://www.mw-robot.com/ServerSt_sp.html',
        openExternal: true,
      },
      {
        title: '化工',
        url: 'https://www.mw-robot.com/ServerSt_hg.html',
        openExternal: true,
      },
    ],
  };

  const robot: FooterColumn = {
    title: '机器人',
    items: [
      {
        title: '新能源',
        url: 'https://www.mw-robot.com/ServerSt_xny.html',
        openExternal: true,
      },
      {
        title: '汽车',
        url: 'https://www.mw-robot.com/ServerSt_qc.html',
        openExternal: true,
      },
      {
        title: '医药',
        description: '',
        url: 'https://www.mw-robot.com/ServerSt_yl.html',
        openExternal: true,
      },
      {
        title: '食品',
        url: 'https://www.mw-robot.com/ServerSt_sp.html',
        openExternal: true,
      },
      {
        title: '化工',
        url: 'https://www.mw-robot.com/ServerSt_hg.html',
        openExternal: true,
      },
    ],
  };

  const community: FooterColumn = {
    title: '社区',
    items: [
      {
        icon: <MediumOutlined />,
        title: 'Medium',
        url: 'http://medium.com/ant-design/',
        openExternal: true,
      },
      {
        icon: <TwitterOutlined style={{ color: '#1DA1F2' }} />,
        title: 'Twitter',
        url: 'http://twitter.com/antdesignui',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
          />
        ),
        title: 'Ant Design 语雀专栏',
        url: 'https://yuque.com/ant-design/ant-design',
        openExternal: true,
      },
      {
        icon: <ZhihuOutlined style={{ color: '#056de8' }} />,
        title: 'Ant Design 知乎专栏',
        url: 'https://www.zhihu.com/column/c_1564262000561106944',
        openExternal: true,
      },
      {
        icon: <ZhihuOutlined style={{ color: '#056de8' }} />,
        title: '体验科技专栏',
        url: 'http://zhuanlan.zhihu.com/xtech',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png"
            alt="seeconf"
          />
        ),
        title: 'SEE Conf',
        description: 'SEE Conf-蚂蚁体验科技大会',
        url: 'https://seeconf.antfin.com/',
        openExternal: true,
      },
    ],
  };

  const more: FooterColumn = {
    icon: (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
        alt="more products"
      />
    ),
    title: '更多产品',
    items: [
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
            alt="yuque"
          />
        ),
        title: '语雀',
        url: 'https://yuque.com',
        description: '知识创作与分享工具',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png"
            alt="AntV"
          />
        ),
        title: 'AntV',
        url: 'https://antv.vision',
        description: '数据可视化解决方案',
        openExternal: true,
      },
      {
        icon: <img src="https://www.eggjs.org/logo.svg" alt="Egg" />,
        title: 'Egg',
        url: 'https://eggjs.org',
        description: '企业级 Node.js 框架',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico"
            alt="kitchen"
          />
        ),
        title: 'Kitchen',
        description: 'Sketch 工具集',
        url: 'https://kitchen.alipay.com',
        openExternal: true,
      },
      {
        icon: (
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
            alt="xtech"
          />
        ),
        title: '蚂蚁体验科技',
        url: 'https://xtech.antfin.com/',
        openExternal: true,
      },
    ],
  };

  const help: FooterColumn = {
    title: '帮助',
    items: [
      github
        ? {
            icon: <GithubOutlined />,
            title: 'GitHub',
            url: github,
            openExternal: true,
          }
        : undefined,
      {
        icon: <HistoryOutlined />,
        title: '更新日志',
        url: '/changelog',
        LinkComponent: Link,
      },

      github
        ? {
            icon: <IssuesCloseOutlined />,
            title: '讨论',
            url: `${github}/issues`,
            openExternal: true,
          }
        : undefined,
    ].filter(Boolean) as FooterColumnItem[],
  };
  return [resources, robot, community, help, more];
};
