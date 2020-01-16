(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{231:function(n,e,a){"use strict";a.r(e);var o=a(0),t=Object(o.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"windows下安装mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows下安装mongodb"}},[n._v("#")]),n._v(" windows下安装mongodb")]),n._v(" "),a("p",[n._v("下载exe文件并安装"),a("br"),n._v("\n创建数据库文件的存放位置，比如"),a("code",[n._v("f:/mongodb/data/db")]),n._v("。"),a("br"),n._v("\n启动mongodb服务之前需要必须创建数据库文件的存放文件夹，否则命令不会自动创建，而且不能启动成功。")]),n._v(" "),a("p",[n._v("进入mongodb安装文件的bin目录（默认："),a("code",[n._v("C:\\Program Files\\MongoDB\\Server\\3.0\\bin")]),n._v("），\n输入如下的命令设置mongoDB的dbpath：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("mongod --dbpath f:\\mongodb\\data\\db\n")])])]),a("p",[n._v("打开"),a("a",{attrs:{href:"http://localhost:27017",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://localhost:27017"),a("OutboundLink")],1),n._v("查看是否启动成功")]),n._v(" "),a("p",[n._v("为了以后不用每次都添加"),a("code",[n._v("--dbpath")]),n._v("参数,需做如下设置\n在"),a("code",[n._v("f:\\mongodb")]),n._v("新建文件"),a("code",[n._v("mongo.config")]),n._v("并填写内容如下")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("dbpath=f:\\mongodb\\data\\db\nlogpath=f:\\mongodb\\log\\mongo.log\n")])])]),a("p",[n._v("进入mongodb安装文件的bin目录，输入如下的命令添加mongodb配置：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("mongod --config F:\\mongodb\\mongo.config  \n")])])]),a("p",[n._v("如果发现新生成日志文件则表示配置成功。")]),n._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//安装windows服务")]),n._v("\nmongod "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("--")]),n._v("config f"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v("\\mongodb\\mongo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),n._v("config "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("install "),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),n._v("serviceName "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v('"MongoDB"')]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//在win10上安装出现如下错误提示 log里看到的(服务安装却不显示成功)")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("02")]),n._v("T11"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("41")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("12.460")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("0800")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("I")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("CONTROL")]),n._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" Trying to install Windows service "),a("span",{pre:!0,attrs:{class:"token string"}},[n._v("'MongoDB'")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("03")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("02")]),n._v("T11"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("41")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("12.460")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("0800")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("I")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("CONTROL")]),n._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("[")]),n._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("]")]),n._v(" Error connecting to the Service Control Manager"),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[n._v("拒绝访问。")]),n._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//解决办法")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//是因为你在cmd下没有权限所致")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//以管理员身份（win+x，然后A键）启动cmd以后")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//再执行你原来的命令就没问题了。")]),n._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//进入mongoDB shell")]),n._v("\ncd "),a("span",{pre:!0,attrs:{class:"token constant"}},[n._v("C")]),a("span",{pre:!0,attrs:{class:"token operator"}},[n._v(":")]),n._v("\\Program Files\\MongoDB\\Server\\"),a("span",{pre:!0,attrs:{class:"token number"}},[n._v("3.0")]),n._v("\\bin\nmongo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//也可以将mongo所在路径加入环境变量path中,")]),n._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[n._v("//之后就可以直接在cmd里输入mongo进而打开mongo shell")]),n._v("\n")])])]),a("p",[n._v("2017-03-02T11:41:12.460+0800 I CONTROL  [main] Trying to install Windows service 'MongoDB'\n2017-03-02T11:41:12.460+0800 I CONTROL  [main] Error connecting to the Service Control Manager: 拒绝访问。 (5)")]),n._v(" "),a("p",[a("a",{attrs:{href:"https://docs.mongodb.com/manual/",target:"_blank",rel:"noopener noreferrer"}},[n._v("mongoDB使用手册"),a("OutboundLink")],1)]),n._v(" "),a("h3",{attrs:{id:"mongodb部分命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb部分命令"}},[n._v("#")]),n._v(" mongodb部分命令")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('//启用mongo shell\nmongo\n//连接远程mongo shell\nmongo 192.168.1.100\n\n//显示数据库\nshow dbs\n\n//切换数据库\nuse dbname\n\n//删除数据库\ndb.dropDatabase() \n\n//显示当前正在使用的数据库\ndb\n//显示当前数据库下面的所有集合(数据库里的数据表)\nshow collections\n//导出test数据库到data/backup文件夹下\nmongodump -d test -o data/backup  \n//在要恢复的文件夹的父级目录里使用如下命令\nmongorestore data/backup\n\n//Use mongoexport to export the data: 导出test数据库下面的traffic表到traffic.json文件\nmongoexport --db test --collection traffic --out traffic.json\n\nmongoimport --db users --collection contacts --file contacts.json  \nmongoimport -d test -c cuxiao --type csv --headerline --file C:\\Users\\zyx\\Desktop\\2017-04-06.csv\n// mac上更改文件编码由GBK转到UTF-8\niconv -f GBK -t UTF-8 /Users/zyx/Downloads/2017-10-05.csv > /Users/zyx/Downloads/2017-10-05_utf8.csv\nmongoimport -d test -c cuxiao --type csv --headerline --file /Users/zyx/Downloads/2017-10-05_utf8.csv\ndb.cuxiao.find({"商品名称":/婴幼儿+|衣服+/},{"商品名称":1,"商品详情页链接地址":1}).limit(5).pretty()\n\n//插入记录\ndb.collectionName.insert({"userName":"zs0","birthday":"1999-09-09","passWord":"123456","gender":0});\n//返回结果入下\n//WriteResult({ "nInserted" : 1 })\n\n//插入一条记录 New in version 3.2\ndb.collectionName.insertOne({"userName":"zs10","birthday":"1999-09-09","passWord":"123456","gender":0});\n// 返回结果如下 \n{\n    "acknowledged" : true,\n    "insertedId" : ObjectId("57e8ef4a0a3c3720c7a9650d")\n}\n\n//插入多条记录 New in version 3.2\ndb.collectionName.insertMany([\n    {"userName":"zs3","birthday":"1999-09-09","passWord":"123456","gender":0},\n    {"userName":"zs1","birthday":"1999-09-09","passWord":"123456","gender":0},\n    {"userName":"zs2","birthday":"1999-09-09","passWord":"123456","gender":0}]\n);\n//返回值如下\n{\n    "acknowledged" : true,\n    "insertedIds" : [\n        ObjectId("57e8ef810a3c3720c7a9650e"),\n        ObjectId("57e8ef810a3c3720c7a9650f"),\n        ObjectId("57e8ef810a3c3720c7a96510")\n    ]\n}\n\n\n//查找全部数据\ndb.collectionName.find(); \n//查找全部数据但显示前两条\ndb.collectionName.find().limit(2);\n//查看查询结果数量\ndb.collectionName.find().count(); \n//美化查询结果\ndb.collectionName.find().pretty(); \n//只显示需要列(_id默认显示,如果不需要显示必须显式阻止) 类似于命令 select username, email from users\ndb.collectionName.find({}, {"username" : 1, "email" : 1, "_id" : 0})\n//单属性匹配\ndb.collectionName.find({"name":"zs"});\ndb.collectionName.find({"user.name":"zs"});\n//多属性同时匹配 \ndb.collectionName.find({"age":20,"name":"zs"});\n//时间段查询\nvar start = new Date(2017, 3, 1);\nvar end = new Date(2017, 4, 7);\ndb.cuxiao.find({created_on: {$gte: start, $lt: end}});\n//正则表达式匹配 find  name startwith "z" and endWith "s" \ndb.collectionName.find({"name":/^z/},{"name":/s$/});\n//正则表达式匹配 find  name 包含BD字符串\ndb.collectionName.find({"name":/BD+/});\n//where条件匹配\ndb.collectionName.find({$where:function(){return this.name="zs"}});\n//find age<23 gl:less than\ndb.collectionName.find({"age":{$lt:23}});\n//find age>23 gt：greater than\ndb.collectionName.find({"age":{$gt:23}});\n//find name="zs" || age=20\ndb.collectionName.find({$or:[{"age":20},{"name":"zs"}]});\n//find age in (10,20,22)\ndb.collectionName.find({"age":{$in:[10,20,22]}});\n//find age not in (10,20,22)\ndb.collectionName.find({"age":{$nin:[10,20,22]}});\n\n\n//修改name=zs为new_ZS 年龄为40\ndb.person.update({"name":"zs"},{"name":"new_ZS","age":40});\n//年龄增加20\ndb.person.update({"name":"zs"},{$inc:{"age":20}});\n//年龄设置为33\ndb.person.update({"name":"zs"},{$set:{"age":33}});\n//第三个参数true，表示更新条件找不到时增加一条记录\ndb.person.update({"name":"szs"},{$set:{"age":33}},true);\n//第四个参数表示更新全部数据\ndb.person.update({"name":"zs"},{$inc:{"age":20}}，true,true);\n//对表中所有数据增加birthday列并设置其默认值\ndb.person.update({},{$set:{"birthday":"1991-01-01"}},true,true);\n//修改字段类型\ndb.cuxiao.find({"商品id":528438367552}).forEach(function(x) {\n    x.优惠券结束时间 = new Date(x.优惠券结束时间);\n    x.优惠券开始时间 = new Date(x.优惠券开始时间);\n    db.cuxiao.save(x); \n}) \n//修改列名\ndb.alipay.update({}, {$rename : {"金额（元）" : "金额"}}, false, true)\n\n\n\n//删除某集合下`name`字段值为`new_ZS`的记录\ndb.collectionName.remove({"name":"new_ZS"});\n//删除某集合下的全部数据（清空表）\ndb.collectionName.remove({});\n//删除某集合下某字段（eg：userName）不存在的记录\ndb.collectionName.remove( { "userName": { $exists: false } } )\n//删除某集合（删除某表）\ndb.collectionName.drop();\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('\n//统计年龄为20的记录条数\ndb.person.count({"age":20});\n//name不重复的记录\ndb.person.distinct("name");\n//name不重复的记录条数\ndb.cuxiao.distinct("id").length\n//name字段升序排列\ndb.person.ensureIndex({"name":1})\ndb.person.ensureIndex({"name":1},{"unique":true});\n//非空唯一 可以为空\ndb.person.ensureIndex({"name":1},{"unique":true,"sparse":true});\ndb.person.find({"name":"ns"}).explain();\ndb.person.ensureIndex({"name":1,"age":1});\n//获取该集合的索引\ndb.person.getIndexes();\n// 要删除的索引名字需通过查看得到\ndb.person.dropIndexes("name_1");\n')])])]),a("h2",{attrs:{id:"mac-osx-下安装mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-osx-下安装mongodb"}},[n._v("#")]),n._v(" Mac OSX 下安装MongoDB")]),n._v(" "),a("h3",{attrs:{id:"以下内容为我自己安装流程记录已确保能正常使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以下内容为我自己安装流程记录已确保能正常使用"}},[n._v("#")]),n._v(" 以下内容为我自己安装流程记录已确保能正常使用")]),n._v(" "),a("blockquote",[a("p",[n._v("根目录指的是"),a("code",[n._v("zyxdeMacBook-Pro:/ zyx$")]),n._v(" 这里显示的是一个"),a("code",[n._v("/")]),a("br"),n._v("\n而用户根目录是"),a("code",[n._v("zyxdeMacBook-Pro:~ zyx$")]),n._v("这里显示的是一个"),a("code",[n._v("~")])])]),n._v(" "),a("p",[n._v("1.把从官网上下的文件，型如：mongodb-osx-x86_64-3.4.0 解压到根目录(非用户根目录)文件夹"),a("br"),n._v("\n2.在根目录下(非用户根目录)新建mongodb文件夹,新建db文件夹（存放数据）mongodb/data/db"),a("br"),n._v("\n3."),a("code",[n._v("sudo chown －R /mongodb")]),n._v(" 设置权限"),a("br"),n._v("\n4.新建文件mongodb/etc/mongod.conf和mongodb/etc/mongod.log"),a("br"),n._v("\n5.进入到bin目录，使用"),a("code",[n._v("mongod --config /mongodb/etc/mongod.conf")]),n._v(" 设置mongod 配置。"),a("br"),n._v("\n6.如果看到waiting for connections on port 27017"),a("br"),n._v("\n7.可以打开浏览器输入：localhost:27017,如果看到It looks like you are trying to access MongoDB over HTTP on the native\ndriver port 说明连接成功了。"),a("br"),n._v("\n8.点击终端 Commond+N 打开一个新的终端 cd 到bin目录 ./mongo 便可连接到数据库进行操作")]),n._v(" "),a("p",[a("code",[n._v("mongod.conf")]),n._v(" 文件内容如下：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("#mongodb config file\ndbpath=/mongodb/data/db\nlogpath=/mongodb/etc/mongod.log\nlogappend = true\n")])])]),a("h2",{attrs:{id:"mac-osx-下设置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-osx-下设置环境变量"}},[n._v("#")]),n._v(" Mac OSX 下设置环境变量")]),n._v(" "),a("p",[n._v("1.打开 应用程序 -> 实用工具 -> 终端；"),a("br"),n._v("\n2.在终端中定位到自己用户的主目录，输入： "),a("code",[n._v("cd ~")]),n._v("；"),a("br"),n._v("\n3.创建一个空文件，输入："),a("code",[n._v("touch .bash_profile")]),n._v(" ；"),a("br"),n._v("\n4.编辑这个文件，输入："),a("code",[n._v("open .bash_profile")]),n._v(" ；"),a("br"),n._v("\n5.在这个文件中输入："),a("code",[n._v("export PATH=${PATH}:<文件目录>")]),n._v('；（将"<文件目录>"替换成自己想要的目录）'),a("br"),n._v("\n例如："),a("code",[n._v("export PATH=${PATH}:mongodb-osx-x86_64-2.6.1/bin")]),n._v("（我把下载后的文件直接放到了根目录）;"),a("br"),n._v("\n6.如果需要添加其他的环境变量例如JAVA_HOME，可以输入："),a("code",[n._v("export JAVA_HOME=/Library/Java/Home")]),n._v(" ；"),a("br"),n._v("\n7."),a("code",[n._v("source .bash_profile")]),n._v("重启终端，测试,这个时候就可以在用户主目录使用上面配置过的配置文件进行设置"),a("code",[n._v("mongod --config /mongodb/etc/mongod.conf")]),n._v("   来启动数据库了，点击终端Commond+N打开一个新的终端，使用mongo命令来连接数据库，对数据库进行操作,比如："),a("code",[n._v("show dbs")]),n._v(" 显示所有的集合")]),n._v(" "),a("h2",{attrs:{id:"mac-osx-下设置mongodb的开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-osx-下设置mongodb的开机启动"}},[n._v("#")]),n._v(" Mac OSX 下设置MongoDB的开机启动")]),n._v(" "),a("p",[n._v("Mac 下用于初始化系统环境的关键经常是 launchd，它是内核转载成功后启动的第一个进程。\n所以设置服务的开机启动要用到这个进程。采用 launchd 开机启动 需要配置一个plist文件。")]),n._v(" "),a("p",[n._v("开机启动分为两种："),a("br"),n._v("\n1、在用户登陆前启动；( plist文件放置在目录：~/Library/LaunchDaemons ) ==我选的是这个 =="),a("br"),n._v("\n2、在用户登陆后启动。( plist文件放置在目录：~/Library/LaunchAgents )")]),n._v(" "),a("p",[n._v("如 MongoDB 的开机启动,需要在 LaunchDaemons 或 LaunchAgents 创建一个 plist文件。"),a("br"),n._v("\n如 org.mongodb.mongod.plist 内容如下所示：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<plist version="1.0">\n  <plist version="1.0">\n  <dict>\n    <key>Label</key>\n    <string>org.mongodb.mongod</string>\n    <key>ProgramArguments</key>\n    <array>\n      <string>/mongodb-osx-x86_64-3.4.0/bin/mongod</string>\n      <string>-f</string>\n      <string>/mongodb/etc/mongod.conf</string>\n    </array>\n    <key>RunAtLoad</key>\n    <true/>\n    <key>KeepAlive</key>\n    <false/>\n    <key>WorkingDirectory</key>\n    <string>/mongodb-osx-x86_64-3.4.0</string>\n    <key>StandardErrorPath</key>\n    <string>/mongodb/etc/error.log</string>\n    <key>StandardOutPath</key>\n    <string>/mongodb/etc/output.log</string>\n    <key>HardResourceLimits</key>\n    <dict>\n      <key>NumberOfFiles</key>\n      <integer>1024</integer>\n    </dict>\n    <key>SoftResourceLimits</key>\n    <dict>\n      <key>NumberOfFiles</key>\n      <integer>1024</integer>\n    </dict>\n  </dict>\n  </plist>\n\n\n')])])]),a("p",[n._v("注意：以上的几个目录需要自己按自己的安装路径设置"),a("br"),n._v("\nplist 文件创建好后 根据自己设置执行如下命令加载到 开机启动中：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//如果没有这个授权命令会给出如下错误提示 \n// /Library/LaunchDaemons/org.mongodb.mongod.plist: Path had bad ownership/permissions\nsudo chown root /Library/LaunchDaemons/org.mongodb.mongod.plist\nsudo launchctl load /Library/LaunchDaemons/org.mongodb.mongod.plist\n")])])]),a("p",[n._v("或者")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("sudo launchctl load /Library/LaunchAgents/org.mongodb.mongod.plist\n")])])]),a("p",[n._v("命令执行后 mongodb 将会马上启动，下次也会随开机而启动。"),a("br"),n._v("\n可通过"),a("a",{attrs:{href:"http://127.0.0.1:27017/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://127.0.0.1:27017"),a("OutboundLink")],1),n._v("查看是否启动成功。")]),n._v(" "),a("p",[n._v("service mongod start\n启动服务后可以使用mongo启动shell\n如何加权限给使用mongo启动不了shell 需要认证后才能进去？")])])}),[],!1,null,null,null);e.default=t.exports}}]);