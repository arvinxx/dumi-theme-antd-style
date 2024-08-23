---
order: 2
title: Tree 树
atomId: Tree
description: 渲染树形结构的组件
group: 功能组件
---


集成[litetree](https://zhangfisher.github.io/lite-tree/)，可以非常方便地在文档中使用树组件。

> 只需要采用缩进方式就可以表示树的结构，支持多种图标、颜色、样式等。

```md
<Tree>
ROOT
    A
        A1
            A11
            A12
        A2
            A21
            A22
    B
        + B1
            B11
            B12
        + B2
            B21
            B22  
</Tree>
```

渲染效果如下：

<Tree>
ROOT
    A
        A1
            A11
            A12
        A2
            A21
            A22
    B
        + B1
            B11
            B12
        + B2
            B21
            B22  
</Tree>

也支持非常丰富的特性，如下：

```md
<Tree>
#error=color:red;border: 1px solid red;background:#ffd2d2;padding:2px;
#blue=color:red;border: 1px solid blue;background:#e6e6ff;padding:2px;
airplane=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjM1LjU4IDEyOC44NEwxNjAgOTEuMDZWNDhhMzIgMzIgMCAwIDAtNjQgMHY0My4wNmwtNzUuNTggMzcuNzhBOCA4IDAgMCAwIDE2IDEzNnYzMmE4IDggMCAwIDAgOS41NyA3Ljg0TDk2IDE2MS43NnYxOC45M2wtMTMuNjYgMTMuNjVBOCA4IDAgMCAwIDgwIDIwMHYzMmE4IDggMCAwIDAgMTEgNy40M2wzNy0xNC44MWwzNyAxNC44MWE4IDggMCAwIDAgMTEtNy40M3YtMzJhOCA4IDAgMCAwLTIuMzQtNS42NkwxNjAgMTgwLjY5di0xOC45M2w3MC40MyAxNC4wOEE4IDggMCAwIDAgMjQwIDE2OHYtMzJhOCA4IDAgMCAwLTQuNDItNy4xNk0yMjQgMTU4LjI0bC03MC40My0xNC4wOEE4IDggMCAwIDAgMTQ0IDE1MnYzMmE4IDggMCAwIDAgMi4zNCA1LjY2TDE2MCAyMDMuMzF2MTYuODdsLTI5LTExLjYxYTggOCAwIDAgMC01Ljk0IDBMOTYgMjIwLjE4di0xNi44N2wxMy42Ni0xMy42NUE4IDggMCAwIDAgMTEyIDE4NHYtMzJhOCA4IDAgMCAwLTkuNTctNy44NEwzMiAxNTguMjR2LTE3LjNsNzUuNTgtMzcuNzhBOCA4IDAgMCAwIDExMiA5NlY0OGExNiAxNiAwIDAgMSAzMiAwdjQ4YTggOCAwIDAgMCA0LjQyIDcuMTZMMjI0IDE0MC45NFoiLz48L3N2Zz4=
ts=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTUgMTUiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBkPSJNMTIuNSA4di0uMTY3YzAtLjczNi0uNTk3LTEuMzMzLTEuMzMzLTEuMzMzSDEwYTEuNSAxLjUgMCAxIDAgMCAzaDFhMS41IDEuNSAwIDAgMSAwIDNoLTFBMS41IDEuNSAwIDAgMSA4LjUgMTFNOCA2LjVIM20yLjUgMFYxM00uNS41aDE0djE0SC41eiIvPjwvc3ZnPg==
---
- [airplane]A公司({color:red;}重点,{#blue}紧急)          //   企业名称
    行政中心
        {color:red;font-weight:bold;background:#ffeaea}总裁办
        [checked]人力资源部
        [unchecked]{.blue}财务部
        行政部        //+  负责行政管理
        法务部        //+  打官司等
        [airplane]审计部        //+  审计财务[保存:tag](sss) [连接](sss)
        信息中心      // 重点[保存](www.baidu.com)[tag][连接:tag](www.baidu.com)
        [star]安[star]全[star]保[star]卫[star]部[star]    //{color:red}   保密工作
    + 市场中心    
        市场部({#error}出错,"{#warning}警告")
        销售部            //-
        客服部            //-
        {#blue}品牌部            //   this is cool
        市场策划部    //!  重点
        市场营销部        // {.blue}this is cool
    研发中心
        移动研发部      //!
        平台研发部({success}Java,{error}Go)
        {.success}测试部
        运维部
        产品部            //*
        设计部            //*
        项目管理部        //*
</Tree>
```

渲染效果如下：

<Tree>
#error=color:red;border: 1px solid red;background:#ffd2d2;padding:2px;
#blue=color:red;border: 1px solid blue;background:#e6e6ff;padding:2px;
airplane=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjM1LjU4IDEyOC44NEwxNjAgOTEuMDZWNDhhMzIgMzIgMCAwIDAtNjQgMHY0My4wNmwtNzUuNTggMzcuNzhBOCA4IDAgMCAwIDE2IDEzNnYzMmE4IDggMCAwIDAgOS41NyA3Ljg0TDk2IDE2MS43NnYxOC45M2wtMTMuNjYgMTMuNjVBOCA4IDAgMCAwIDgwIDIwMHYzMmE4IDggMCAwIDAgMTEgNy40M2wzNy0xNC44MWwzNyAxNC44MWE4IDggMCAwIDAgMTEtNy40M3YtMzJhOCA4IDAgMCAwLTIuMzQtNS42NkwxNjAgMTgwLjY5di0xOC45M2w3MC40MyAxNC4wOEE4IDggMCAwIDAgMjQwIDE2OHYtMzJhOCA4IDAgMCAwLTQuNDItNy4xNk0yMjQgMTU4LjI0bC03MC40My0xNC4wOEE4IDggMCAwIDAgMTQ0IDE1MnYzMmE4IDggMCAwIDAgMi4zNCA1LjY2TDE2MCAyMDMuMzF2MTYuODdsLTI5LTExLjYxYTggOCAwIDAgMC01Ljk0IDBMOTYgMjIwLjE4di0xNi44N2wxMy42Ni0xMy42NUE4IDggMCAwIDAgMTEyIDE4NHYtMzJhOCA4IDAgMCAwLTkuNTctNy44NEwzMiAxNTguMjR2LTE3LjNsNzUuNTgtMzcuNzhBOCA4IDAgMCAwIDExMiA5NlY0OGExNiAxNiAwIDAgMSAzMiAwdjQ4YTggOCAwIDAgMCA0LjQyIDcuMTZMMjI0IDE0MC45NFoiLz48L3N2Zz4=
ts=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTUgMTUiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBkPSJNMTIuNSA4di0uMTY3YzAtLjczNi0uNTk3LTEuMzMzLTEuMzMzLTEuMzMzSDEwYTEuNSAxLjUgMCAxIDAgMCAzaDFhMS41IDEuNSAwIDAgMSAwIDNoLTFBMS41IDEuNSAwIDAgMSA4LjUgMTFNOCA2LjVIM20yLjUgMFYxM00uNS41aDE0djE0SC41eiIvPjwvc3ZnPg==
---
- [airplane]A公司({color:red;}重点,{#blue}紧急)          //   企业名称
    行政中心
        {color:red;font-weight:bold;background:#ffeaea}总裁办
        [checked]人力资源部
        [unchecked]{.blue}财务部
        行政部        //+  负责行政管理
        法务部        //+  打官司等
        [airplane]审计部        //+  审计财务[保存:tag](sss) [连接](sss)
        信息中心      // 重点[保存](www.baidu.com)[tag][连接:tag](www.baidu.com)
        [star]安[star]全[star]保[star]卫[star]部[star]    //{color:red}   保密工作
    + 市场中心    
        市场部({#error}出错,"{#warning}警告")
        销售部            //-
        客服部            //-
        {#blue}品牌部            //   this is cool
        市场策划部    //!  重点
        市场营销部        // {.blue}this is cool
    研发中心
        移动研发部      //!
        平台研发部({success}Java,{error}Go)
        {.success}测试部
        运维部
        产品部            //*
        设计部            //*
        项目管理部        //*
</Tree>

关于`Tree`更多使用，请访问[litetree](https://zhangfisher.github.io/lite-tree/)。
