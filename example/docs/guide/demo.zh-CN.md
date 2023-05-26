---
title: Demo 研发
order: 1
group: 进阶特性
demo:
  cols: 2
---

## Demo 研发

本主题包下，demo 会自动响应站点亮暗色模式（`themeMode = auto`），并默认使用 antd 原本的亮暗色主题。

<code src="../demos/Antd.tsx"></code>
<code src="../demos/AntdLight.tsx"></code>

如果需要控制 单个 demo 是否继承文档站的主题，可以通过 demo 元数据的 `inheritSiteTheme`字段配置。

<code src="../demos/inheritSiteTheme.tsx"></code>

如果需要让站点的主题全部都跟随 demo 的主题，可以通过添加 `siteToken: { demoInheritSiteTheme: true }` 属性来指定。详细可以查看：[siteToken](/config#sitetoken) 配置介绍

## 自定义方向

通过在 demo 元数据中添加 `codePlacement` 属性，可以控制预览器的代码展开方向。

设置 `codePlacement:left` ，可以让代码展示在预览器左侧。

<code src="../demos/Left.tsx"></code>

设置 `codePlacement:top` ，可以让代码展示在预览器上方。

<code src="../demos/Top.tsx"></code>

设置 `codePlacement:right` ，可以让代码展示在预览器右侧。

<code src="../demos/Right.tsx"></code>

:::info
设置 codePlacement 时，建议搭配设置 `defaultShowCode: true`
:::
