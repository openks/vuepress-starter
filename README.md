# 使用vuepress搭建博客

## 永久链接找不到首页

[永久链接](https://vuepress.vuejs.org/zh/guide/permalinks.html#%E6%B0%B8%E4%B9%85%E9%93%BE%E6%8E%A5-2)配置简单  
开发环境配置完成后会自动跳转首页  
但是打包后
1.无法自动跳转首页  
2.静态资源引用会丢掉base

```js
// .vuepress/config.js
module.exports = {
  permalink: "/:year/:month/:day/:slug"
};
```

问题1可通过自定义首页解决  

```md
// README.md
---
title: Hello World
permalink: /index.html
---

Hello!
```

问题2可通过`$withBase`解决  

```vue
<img :src="$withBase('/foo.png')" alt="foo">
```

## 侧边栏按时间排序,最新文件在最上面

todo
