(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{239:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-router前端权限控制问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router前端权限控制问题"}},[t._v("#")]),t._v(" vue-router前端权限控制问题")]),t._v(" "),a("p",[t._v("前提纲要：\n1.用户A和用户B有不同的权限。\n页面分左侧菜单部分和右侧内容部分，右侧内容可能有不同路径的不同内容"),a("br"),t._v("\n最简单例子为点击左侧用户管理"),a("br"),t._v("\n右侧显示用户列表"),a("br"),t._v("\n点击某条内容详情"),a("br"),t._v("\n右侧显示某一用户的详细内容"),a("br"),t._v("\n2.用户A可以访问路径权限如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("a/list\na/detail/:id\na/list/:id \n")])])]),a("p",[t._v("用户B可以访问路径权限如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("b/list\nb/detail/:id\nb/list/:id\n")])])]),a("p",[t._v("3.正常用户登陆进去可以看到自己的菜单，\n点击菜单右侧内容部分发生变化，然后在右侧操作,更改页面url，左侧菜单不变，右侧内容页发生变化")]),t._v(" "),a("p",[t._v("碰到问题如下：\n用户B登陆进去点击菜单进入"),a("code",[t._v("b/detail/:id")]),t._v("然后保存为书签（即保存该路径）退出\n然后用户A登陆点击保存的标签页，正常获取左侧菜单权限，左侧菜单正常显示，但是右侧却根据url显示了自己权限外的"),a("code",[t._v("b/detail/:id")]),t._v("的内容(暂不考虑跟服务端交互问题，虽说服务端可以再掉用接口时给出无权限返回，前端再根据返回进行逻辑处理，但即便这样前端页面显示依旧不正常)")]),t._v(" "),a("p",[t._v("解决方案：\n在路由进入之前，根据路由的meta属性的某一字段比对所有的可访问权限(这个在登录时已经获取了，可以存在localstorage里)，如果能找到则进去否则跳转到某个固定页，这样就解决了权限问题")])])}),[],!1,null,null,null);e.default=s.exports}}]);