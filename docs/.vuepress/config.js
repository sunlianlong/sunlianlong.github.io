module.exports = {
  "title": "Sun",
  "description": "个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    ['link', { rel: 'apple-touch-icon', href: '/icons/128.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    // 引入jquery
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
      // appId: 'dXJfrib0qz0Uko6XtINWCJgL-gzGzoHsz',// your appId
      // appKey: 'K2PTbGifnRu9UKGSeTjnhhIi', // your appKey
      placeholder: '请填写邮箱，可收到回复的提醒。'
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "导航",
        "link": "http://sllhome.gitee.io/navigation/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            text: "关于", link: "/about/"
          }
        ]
      },
      {
        "text": "GitHub",
        "icon": "reco-github",
        "link": "https://github.com/sunlianlong/sunlianlong.github.io",
        "target":'_blank' 
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "类别"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "更新于",
    "author": "Sun",
    "authorAvatar": "/logo.png",
    "record": "粤ICP备16092199号-3",
    "recordLink": "http://beian.miit.gov.cn",
    "startYear": "2016",
    // "repoLabel": 'GitHub',
    // "repo": 'sunlianlong/sunlianlong.github.io',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    docsBranch: 'blog',
    // editLinks: true,
    // editLinkText: '参与编辑此文章',
  },
  "markdown": {
    "lineNumbers": true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@pic': 'docs/pic'
      }
    }
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-kan-ban-niang', {
      theme: ['wanko'],
      clean: true
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "新的风暴已经出现",
        buttonText: "盘他"
      }
    }],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
        content: "复制成功!"
      }
    }],
    // ['@vuepress-reco/vuepress-plugin-rss', {
    //   site_url: 'https://sunlianlong.com',
    //   copyright: 'sunlianlong'
    // }],
  ]
}