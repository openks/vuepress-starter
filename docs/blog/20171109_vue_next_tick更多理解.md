---
title: vue_next_tick更多理解
date: 2017-11-09 15:44:15  
description:  vue_next_tick更多理解
---

# vue_next_tick更多理解

今天在项目时发现这么一个问题</br>
问题描述：</br>
页面组成：上面查询，下面表格</br>
查询部分有一个显示更多查询条件的按钮，点击该按钮后显示更多查询条件，再次点击收起更多查询条件</br>
功能其实很简单，通过一个变量控制更多查询条件的显示和隐藏，同时调整下面表格的高度,实现代码如下：</br>
```js
// 更改是否显示更多查询条件的变量
this.showMore =! this.showMore
// 重新计算表格高度
this.calcHeight()
```
当计算表格高度的时候发现查询条件高度计算失误，是没有改变状态之前的高度</br>
需要在下一次tick的时候再计算高度</br>
解决方法  
```js
// 更改是否显示更多查询条件的变量
this.showMore =! this.showMore
this.nextTick(function(){
  // 重新计算表格高度
  this.calcHeight()
})
```
