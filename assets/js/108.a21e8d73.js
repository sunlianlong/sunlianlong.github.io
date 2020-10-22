(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{581:function(s,e,n){"use strict";n.r(e);var a=n(3),l=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("当url地址含有中文，或者参数有中文的时候，这个算是很正常了，但是把这样的url作为参数传递的时候（最常见的callback），需要把一些中文甚至'/'做一下编码转换。")]),s._v(" "),n("p",[s._v("所以对于一些中文或者字符，url不识别的，则需要进行转换，转换结果如下：")]),s._v(" "),n("p",[s._v("一、urlencode\nurllib库里面有个urlencode函数，可以把key-value这样的键值对转换成我们想要的格式，返回的是a=1&b=2这样的字符串，比如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import urllib.parse\nvalues={}\nvalues['username']='02蔡彩虹'\nvalues['password']='ddddd?'\nurl=\"http://www.baidu.com\"\ndata=urllib.parse.urlencode(values)\nprint(data)\n# username=02%E8%94%A1%E5%BD%A9%E8%99%B9&password=ddddd%3F\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("结果如下：")]),s._v(" "),n("p",[s._v("如果只想对一个字符串进行urlencode转换，怎么办？urllib提供另外一个函数：quote()")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("import urllib.parse\ns='长春'\ns=urllib.parse.quote(s)\nprint(s)\n# %E9%95%BF%E6%98%A5\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("输出结果为：")]),s._v(" "),n("p",[s._v("二、urldecode\n当urlencode之后的字符串传递过来之后，接受完毕就要解码了——urldecode。urllib提供了unquote()这个函数，可没有urldecode()！")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("s='%E5%B9%BF%E5%B7%9E'\ns=urllib.parse.unquote(s)\nprint(s)\n# 广州\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])])}),[],!1,null,null,null);e.default=l.exports}}]);