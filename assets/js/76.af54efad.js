(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{612:function(e,n,s){"use strict";s.r(n);var t=s(3),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("系统 centOS")]),e._v(" "),s("p",[e._v("首先进入服务器查看本地能否链接")]),e._v(" "),s("p",[e._v("由于是用pm2管理\npm2 list 列出所有用 PM2 启动的项目")]),e._v(" "),s("p",[e._v("pm2 logs 显示所有进程日志")]),e._v(" "),s("p",[e._v("0|www      | 数据库链接失败\n0|www      | Error: connect ECONNREFUSED 127.0.0.1:3306\n0|www      |     at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1161:14)\n0|www      |     --------------------\n0|www      |     at Protocol._enqueue (/home/node/markdownserver/node_modules/mysql/lib/protocol/Protocol.js:145:48)\n0|www      |     at Protocol.handshake (/home/node/markdownserver/node_modules/mysql/lib/protocol/Protocol.js:52:23)\n0|www      |     at Connection.connect (/home/node/markdownserver/node_modules/mysql/lib/Connection.js:130:18)\n0|www      |     at Object.query (/home/node/markdownserver/database/db.js:8:20)\n0|www      |     at /home/node/markdownserver/routes/index.js:14:5\n0|www      |     at Layer.handle [as handle_request] (/home/node/markdownserver/node_modules/express/lib/router/layer.js:95:5)\n0|www      |     at next (/home/node/markdownserver/node_modules/express/lib/router/route.js:137:13)\n0|www      |     at Route.dispatch (/home/node/markdownserver/node_modules/express/lib/router/route.js:112:3)\n0|www      |     at Layer.handle [as handle_request] (/home/node/markdownserver/node_modules/express/lib/router/layer.js:95:5)\n0|www      |     at /home/node/markdownserver/node_modules/express/lib/router/index.js:281:22\nPM2        | App [www] with id [0] and pid [27584], exited with code [1] via signal [SIGINT]\nPM2        | Starting execution sequence in -fork mode- for app name:www id:0\nPM2        | App name:www id:0 online")]),e._v(" "),s("p",[e._v("数据库挂了，查看数据库日志\n查看数据库日志文件地址\ncat /etc/my.cnf")]),e._v(" "),s("p",[e._v("tail -f /var/log/mysqld.log")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2018-11-27T07:56:54.106090Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).\n2018-11-27T07:56:54.108089Z 0 [Note] /usr/sbin/mysqld (mysqld 5.7.20) starting as process 30517 ...\n2018-11-27T07:56:54.120484Z 0 [Note] InnoDB: PUNCH HOLE support available\n2018-11-27T07:56:54.120538Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins\n2018-11-27T07:56:54.120544Z 0 [Note] InnoDB: Uses event mutexes\n2018-11-27T07:56:54.120548Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier\n2018-11-27T07:56:54.120552Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.3\n2018-11-27T07:56:54.120558Z 0 [Note] InnoDB: Using Linux native AIO\n2018-11-27T07:56:54.134609Z 0 [Note] InnoDB: Number of pools: 1\n2018-11-27T07:56:54.134751Z 0 [Note] InnoDB: Using CPU crc32 instructions\n2018-11-27T07:56:54.237143Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M\n2018-11-27T07:56:54.237219Z 0 [ERROR] InnoDB: mmap(137428992 bytes) failed; errno 12\n2018-11-27T07:56:54.237230Z 0 [ERROR] InnoDB: Cannot allocate memory for the buffer pool\n2018-11-27T07:56:54.237237Z 0 [ERROR] InnoDB: Plugin initialization aborted with error Generic error\n2018-11-27T07:56:54.237248Z 0 [ERROR] Plugin 'InnoDB' init function returned error.\n2018-11-27T07:56:54.237254Z 0 [ERROR] Plugin 'InnoDB' registration as a STORAGE ENGINE failed.\n2018-11-27T07:56:54.237261Z 0 [ERROR] Failed to initialize plugins.\n2018-11-27T07:56:54.237265Z 0 [ERROR] Aborting\n\n2018-11-27T07:56:54.237288Z 0 [Note] Binlog end\n2018-11-27T07:56:54.436650Z 0 [Note] Shutting down plugin 'CSV'\n2018-11-27T07:56:54.436951Z 0 [Note] /usr/sbin/mysqld: Shutdown complete\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])]),s("p",[e._v("仔细阅读内容，有一句 Cannot allocate memory for the buffer pool 指明挂掉原因，内存不足\n查看内存使用\nfree -m\ntotal        used        free      shared  buff/cache   available\nMem:            992         781          77          18         133          53\nSwap:             0           0           0")]),e._v(" "),s("p",[e._v("只剩77MB内存了")]),e._v(" "),s("p",[e._v("重启服务器，重启相关服务")])])}),[],!1,null,null,null);n.default=r.exports}}]);