(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{236:function(t,v,_){"use strict";_.r(v);var n=_(0),r=Object(n.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"自定义组件分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件分类"}},[t._v("#")]),t._v(" 自定义组件分类")]),t._v(" "),_("p",[t._v("组件分两种")]),t._v(" "),_("ol",[_("li",[t._v("容器组件(存储状态及状态逻辑,不考虑显示问题)")]),t._v(" "),_("li",[t._v("显示组件(只做显示使用，不存储任何状态)")])]),t._v(" "),_("p",[t._v("虽然这个概念来源于react,但用在vue组件里也是一样")]),t._v(" "),_("p",[t._v("容器组件仅仅做数据提取，然后渲染对应的子组件(显示组件)"),_("br"),t._v("\n显示组件可以高效的复用，甚至可以废掉重新做一个显示组件,而不需处理任何业务逻辑。"),_("br"),t._v("\n因为任何逻辑都已经在容器组件里处理过了,在业务逻辑不变的情况下，如果要改页面只需修改显示组件即可")]),t._v(" "),_("p",[_("strong",[t._v("Q1:容器组件和显示组件中间的数据映射，该如何处理?")])]),t._v(" "),_("blockquote",[_("p",[t._v("如容器组件里保存的是code如0,1\n而显示组件需要显示的是name如男,女")])]),t._v(" "),_("p",[_("strong",[t._v("A1:其实两种方式均可，建议如下")])]),t._v(" "),_("ol",[_("li",[t._v("如果是固定数量的值建议放在显示组件里："),_("br"),t._v("\n如男女，已婚未婚这种前后端协商好的甚至是可以硬编码到代码里的字段建议放在显示组件处理")]),t._v(" "),_("li",[t._v("如果不是固定数量的值建议放在容器组件里："),_("br"),t._v("\n如需根据服务端返回的数据字典(该字典可通过其他渠道维护非硬编码在代码里)查找对比后显示的"),_("br"),t._v("\n因需要与服务端交互就不能作为显示组件处理")])])])}),[],!1,null,null,null);v.default=r.exports}}]);