(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{628:function(s,n,a){"use strict";a.r(n);var e=a(3),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 获取指定url参数的值：\n// key为参数中的名字\nfunction urlParam(key) {\n    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");\n    var r = window.location.search.substr(1).match(reg);\n    if (r != null) return decodeURI(r[2]);\n    return null;\n};\n\n\n// 获取url中的参数，并返回一个对象\nfunction getRequestData() {\n    var url = location.search; //获取url中"?"符后的字串\n    var theRequest = {};\n    if (url.indexOf("?") != -1) {\n        var str = url.substr(1);\n        strs = str.split("&");\n        for (var i = 0; i < strs.length; i++) {\n            theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);\n        }\n    }\n    return theRequest;\n};\n\n// 生成一个带参数的url\nfunction createUrl(obj) {\n    var length = obj && obj.length,\n        idx = 0,\n        url = obj.url + \'?\';\n    for (var key in obj) {\n        if (key != \'url\' && obj[key] !== null) {\n        \turl += (key + \'=\' + encodeURIComponent(obj[key]) + \'&\');\n        }\n    }\n    return url.substring(0, url.lastIndexOf(\'&\'));\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])]),a("p",[s._v("是用方法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// url = "file:///C:/Users/Administrator/Desktop/index.html?a=11&b=2&c=3&url=http://www.baidu.com";\n\nvar obj = getRequestData();\n\nconsole.log(obj);// Object {a: "11", b: "2", c: "3", url: "http://www.baidu.com"}\n\nconsole.log(createUrl(obj));// http://www.baidu.com?a=11&b=2&c=3\n\nconsole.log(urlParam("a"));// 11\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);