---
title: vuepress对静态文件处理
date: 2020-01-15 18:04:43  
---

## 静态图片两种方法

```markdown
打开`F12`就可以看到下面两张图片的差别
图片存放在`.vuepress/public/images`文件夹下
第一种:会对文件进行处理
![An image](../.vuepress/public/images/foo.jpg)
第二种:直接使用源文件(启用全局永久链接时会存在找不到文件的风险)
![An image](/images/foo.jpg)
第三种:是用widthBase
<img :src="$withBase('/images/foo.jpg')" alt="foo">
```

![An image](../.vuepress/public/images/foo.jpg)
![An image](/images/foo.jpg)
<img :src="$withBase('/images/foo.jpg')" alt="foo">

## html及txt文件

```markdown
// `foo.txt`放置在`.vuepress/public`文件夹下
[html](/html/foo.html)
[text](/foo.txt)
```

[链接到html文件](/html/foo.html)</br>
[链接到text文件](/foo.txt)  
