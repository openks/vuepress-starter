(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{288:function(e,a,t){"use strict";t.r(a);var r=t(0),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("读"),t("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[e._v("airbnb javascript标准"),t("OutboundLink")],1),e._v(" 有感")]),e._v(" "),t("p",[e._v("在读标准时发现还有很多知识点不大明白记录之")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Array.map\nArray.forEach\nArray.reduce\nArray.from\nObject.assign\nNumber(string)\nobject literals\nexport 和export default区别\nimport foo, { named1, named2 } from 'foo';\n")])])]),t("h2",{attrs:{id:"array-map介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-map介绍"}},[e._v("#")]),e._v(" Array.map介绍")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var new_array = arr.map(callback[, thisArg])\n\ncallback\n        Function that produces an element of the new Array, taking three arguments:\n    currentValue 当前值\n        The current element being processed in the array.\n    index index值 从0开始的index值\n        The index of the current element being processed in the array.\n    array 当前数组\n        The array map was called upon.\nthisArg\n    Optional. Value to use as this when executing callback.\n    If a thisArg parameter is provided to map, it will be used as callback's this value. Otherwise, the value undefined will be used as its this value.\nReturn value  返回值为新数组不影响原数组\n    A new array with each element being the result of the callback function.\n\nArray.map不修改原数组\n")])])]),t("h2",{attrs:{id:"array-foreach介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-foreach介绍"}},[e._v("#")]),e._v(" Array.forEach介绍")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("arr.forEach(function callback(currentValue, index, array) {\n    //your iterator\n}[, thisArg]);\n\ncallback\n        Function to execute for each element, taking three arguments:\n    currentValue  当前值\n        The current element being processed in the array.\n    index  从0开始的index值\n        The index of the current element being processed in the array.\n    array 当前数组\n        The array that forEach() is being applied to.\nthisArg [Optional]\n        Value to use as this (i.e the reference Object) when executing callback.\n        If a thisArg parameter is provided to forEach, it will be used as callback's this value. Otherwise, the value undefined will be used as its this value.\nReturn value\n    undefined.\nArray.forEach不修改原数组\n")])])]),t("h2",{attrs:{id:"array-reduce介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-reduce介绍"}},[e._v("#")]),e._v(" Array.reduce介绍")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("arr.reduce(callback, [initialValue])\n\ncallback\n        Function to execute on each element in the array, taking four arguments:\n    accumulator 累加器\n        The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below).\n    currentValue 当前值\n        The current element being processed in the array.\n    currentIndex\n        The index of the current element being processed in the array. Starts at index 0, if an initialValue is provided, and at index 1 otherwise.\n    array  当前数组\n        The array reduce was called upon.\n    initialValue\n        累加器初始值，\n        如果不存在则accumulator为第一个元素值，currentValue为第二个元素值 currentIndex从1开始\n        如果存在则accumulator为初始值，currentValue为第一个元素值 currentIndex从0开始\n        [Optional] Value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used. Calling reduce on an empty array without an initial value is an error.\nReturn value\n    The value that results from the reduction.\n")])])]),t("h2",{attrs:{id:"array-from介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array-from介绍"}},[e._v("#")]),e._v(" Array.from介绍")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Parameters\n    arrayLike\n        An array-like or iterable object to convert to an array.\n    mapFn [Optional]\n        Map function to call on every element of the array.\n    thisArg [Optional]\n        Value to use as this when executing mapFn.\nReturn value\n    A new Array instance.\nArray.from可以把类数组对象转变成数组如函数的入参,\ndocument.querySelectorAll("div")返回的nodelist\n')])])]),t("h2",{attrs:{id:"object-assign"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-assign"}},[e._v("#")]),e._v(" Object.assign()")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Object.assign(target, ...sources)\n\nThe Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.\n\nParameters\n    target\n        The target object.\n    sources\n        The source object(s).\nReturn value\n    The target object.\n\n被用来复制一个或多个对象的可枚举属性（浅拷贝,需留意多层级嵌套对象）\n")])])]),t("h2",{attrs:{id:"number-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#number-string"}},[e._v("#")]),e._v(" Number(string)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Using the Number object to assign values to numeric variables\n如果string不能转换为数字则返回NaN\n")])])]),t("h2",{attrs:{id:"object-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-literals"}},[e._v("#")]),e._v(" object literals")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("这就是对象字面量\nconst a={\n    name:zs,\n    age:18,\n}\n\nconst b =[1,3,4,5,6,7];\n")])])]),t("h2",{attrs:{id:"export-和export-default区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-和export-default区别"}},[e._v("#")]),e._v(" export 和export default区别")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("导出和默认导出\n导出可以有多种但export default只能有一个\n\nfunction foo(){\n\n}\nfunction bar(){\n\n}\n\nexport var named1 = 'Michael';\nexport var named2 = 'Jackson';\nexport {bar} ;\nexport default foo;\n\n")])])]),t("h2",{attrs:{id:"import-foo-named1-named2-from-foo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import-foo-named1-named2-from-foo"}},[e._v("#")]),e._v(" import foo, { named1, named2 } from 'foo';")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("即在一条import语句中，同时输入默认方法和其他变量，可以写成下面这样。\nimport foo, { named1, named2 } from 'foo';\nfoo为export default\nnamed1 和 named2 为export {named1},eport {named2}\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);