(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{580:function(s,t,n){"use strict";n.r(t);var a=n(3),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("date: 2017-07-12 17:45")]),s._v(" "),n("hr"),s._v(" "),n("h4",{attrs:{id:"在python中最简单的莫过于使用print-来调试输出-但是有另外一种方法是使用logging来调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在python中最简单的莫过于使用print-来调试输出-但是有另外一种方法是使用logging来调试"}},[s._v("#")]),s._v(" 在Python中最简单的莫过于使用print()来调试输出，但是有另外一种方法是使用logging来调试")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" logging\nlogging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("basicConfig"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("level"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("logging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后在需要的地方使用")]),s._v("\nlogging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-----输出----\x3e>>>> %s'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" bug"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("logging允许你指定记录信息的级别，有debug，info，warning，error等几个级别，当我们指定level=INFO时，logging.debug就不起作用了。同理，指定level=WARNING后，debug和info就不起作用了。这样一来，你可以放心地输出不同级别的信息，也不用删除，最后统一控制输出哪个级别的信息。logging的另一个好处是通过简单的配置，一条语句可以同时输出到不同的地方，比如 console 和文件")]),s._v(" "),n("h4",{attrs:{id:"用-filehandler-把记录写进文件中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用-filehandler-把记录写进文件中"}},[s._v("#")]),s._v(" 用 FileHandler 把记录写进文件中")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" logging\n\nlogger "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" logging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getLogger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlogger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setLevel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a file handler")]),s._v("\n\nhandler "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" logging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FileHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello.log'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setLevel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INFO"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create a logging format")]),s._v("\n\nformatter "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" logging"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Formatter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%(asctime)s - %(name)s - %(levelname)s - %(message)s'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nhandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setFormatter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("formatter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add the handlers to the logger")]),s._v("\n\nlogger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("addHandler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("handler"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nlogger"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("info"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello baby'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);