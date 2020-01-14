(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{255:function(e,s,a){"use strict";a.r(s);var n=a(0),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"在bae上添加应用-并clone代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在bae上添加应用-并clone代码"}},[e._v("#")]),e._v(" 在BAE上添加应用,并clone代码")]),e._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//从git clone代码\ngit clone https://git.duapp.com/appid9rupli9dyd\n")])])]),a("h2",{attrs:{id:"安装express"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装express"}},[e._v("#")]),e._v(" 安装express")]),e._v(" "),a("p",[e._v("在"),a("code",[e._v("appid9rupli9dyd")]),e._v("文件夹安装express")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//安装express\nnpm install express --save\n//安装express生成器\nnpm install express-generator -g\n//-e 启用ejs模板(默认jade) -f 在非空文件夹生成目录结构\nexpress -e-f\n//项目初始化，修改当前package.json文件\nnpm init\n//安装依赖包\nnpm install\n//以debug方式启动项目\nSET DEBUG=appid9rupli9dyd:* & npm start\n")])])]),a("p",[e._v("本地3000端口查看效果 http://127.0.0.1:3000")]),e._v(" "),a("p",[e._v("因为BAE使用的是18080端口需要修改端口")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//在app.js 文件导出之前添加默认端口修改\nprocess.env.PORT =18080;\n")])])]),a("p",[e._v("重启后去本地3000及18080端口查看效果 http://127.0.0.1:18080 ，3000端口已经不能访问，18080端口可访问")]),e._v(" "),a("p",[e._v("修改代码需要重新部署，我们可以通过使用supervisor提高nodejs调试效率,可以做到修改代码自动部署，使用起来也很简单")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#全局安装supervisor")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g supervisor\nsupervisor bin/www\n")])])]),a("p",[e._v("public 目录可以直接访问，我不习惯使用默认，会修改为js,css,img同时会修改相对应的路径")]),e._v(" "),a("h2",{attrs:{id:"部署bae"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署bae"}},[e._v("#")]),e._v(" 部署BAE")]),e._v(" "),a("p",[e._v("上传代码到BAE,发现报错，错误信息如下")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('552 occured because of user code error\n\nyour package.json file error\n\npacakge.json must json file and must contain "scripts":{"start":"node xxx.js"}\n\nplease modify your package.json and recommit your code\n\nError Message is\n\n[2016-07-29 14:47:57.550] [ERROR] manager - catch signal SIGTERM, manager will exit\n[2016-07-29 14:48:00.316] [ERROR] manager - scripts.start in package.json must contain ".js", but your scripts.start is "node ./bin/www"\nget more message, please check manager.log\n')])])]),a("p",[e._v("start 必须以.js结尾。重命名"),a("code",[e._v("bin/www")]),e._v("为"),a("code",[e._v("bin/www.js")]),e._v("即可")]),e._v(" "),a("p",[e._v("如果不上传依赖文件,错误信息如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('失败原因：编译失败\n失败信息：Fix depends failed. Please check requirements.txt or package.json.\n\nnpm ERR! Linux 3.10.1-grsec\nnpm ERR! argv "/home/bae/bae/node-v4.4.4-linux-x64/bin/node" "/home/bae/bae/node-v4.4.4-linux-x64/bin/npm" "install" "--production"\nnpm ERR! node v4.4.4\nnpm ERR! npm v2.15.1\nnpm ERR! failed to fetch from registry: http://registry.cnpmjs.org/morgan\nnpm ERR!\nnpm ERR! If you need help, you may report this error at:\nnpm ERR! <https://github.com/npm/npm/issues>\nnpm ERR! Please include the following file with any support request:\nnpm ERR! /home/bae/run/baeng/helios/work/appid9rupli9dyd/.bae/npm-debug.log\n')])])]),a("p",[e._v("一看就知道依赖加载失败，把依赖文件夹整体上传就可以了。"),a("br"),e._v("\n由于BAE使用的可视化界面为rockmongo,而且不能远程连接不能使用mongoshell,所以我们需要稍微了解下rockmongo")]),e._v(" "),a("h2",{attrs:{id:"rockmongo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rockmongo"}},[e._v("#")]),e._v(" rockmongo")]),e._v(" "),a("p",[e._v("插入数据")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("array(\n  \"userName\" : \"张三疯\",\n  \"passWord\" : \"123456\",\n  \"birthday\" : \"1991-01-01\",\n  \"gender\" : 2\n)\n//结果\narray (\n  '_id' => new MongoId(\"579b0eb5b6939eec77000000\"),\n  'userName' => '张三疯',\n  'passWord' => '123456',\n  'birthday' => '1991-01-01',\n  'gender' => new MongoInt64(2),\n)\n")])])])])}),[],!1,null,null,null);s.default=t.exports}}]);