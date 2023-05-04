---
title: Demo 研发
order: 6
group: 进阶特性
demo:
  cols: 2
---

## Demo 研发

该主题默认会保证 antd 的默认主题样式，如果需要 demo 集成文档站的主题，可以通过对文档配置 `inherit: true` 属性来指定。

<code src="../demos/Antd.tsx"></code>
<code src="../demos/AntdInherit.tsx"></code>

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
