module.exports = {
    title: "$的博客",
    description: "随笔瞎写",
    keywords: "前端开发，个人博客，JavaScript、Vue、Node，微信小程序，WEB前端技术博客",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/img/logo.ico",
            },
        ],
    ],
    base: "/newBlog/",
    erviceWorker: true, // 是否支持PWA
    themeConfig: {
        lastUpdatedText: "上次更新",
        nav: [{
                text: "Home",
                link: "/",
            },
            {
                text: "前端知识",
                link: "/articles/",
            },
            {
                text: "计算机基础",
                link: "/base/",
            },
            {
                text: "Github",
                link: "",
            }
        ],
        sidebarDepth: 3,
        sidebar: {
            // "/base/": [{
            //         text: "数据结构",
            //         path: "",
            //     },
            //     {
            //         text: "算法",
            //         path: "",
            //     },
            //     {
            //         text: "LeetCode",
            //         path: "",
            //     },
            //     {
            //         text: "网络协议",
            //         link: "",
            //     },
            //     {
            //         text: "设计模式",
            //         link: "",
            //     }
            // ],
            '/articles/': [
                // {
                //     text: "HTML",
                //     link: "/articles/HTML/",
                // },
                // {
                //     text: "CSS",
                //     link: "/articles/CSS/",
                // },
                {
                    title: "JavaScript",
                    link: "/articles/JavaScript/",
                    children: [
                        {
                            title: "从0实现Promise",
                            path: "/articles/JavaScript/从0实现Promise.md",
                        },
                        {
                            title: "一次搞懂-JS事件循环EventLoop",
                            path: "/articles/JavaScript/一次搞懂-JS事件循环EventLoop.md",
                        },
                    ],
                },
                // {
                //     text: "TypeScript",
                //     link: "/articles/TypeScript/",
                // },
                // {
                //     text: "React",
                //     link: "/articles/React/",
                // },
                // {
                //     text: "Vue",
                //     link: "/articles/Vue/",
                // },
                // {
                //     text: "Node",
                //     link: "/articles/Node/",
                // },
                // {
                //     text: "前端性能优化",
                //     link: "/articles/Performance/",
                // },
                // {
                //     text: "安全",
                //     link: "/articles/Security/",
                // },
                // {
                //     text: "源码系列",
                //     link: "/articles/SourceCode/",

                //     children: [],
                // },
                // {
                //     text: "正则表达式",
                //     link: "/articles/RegExp/",

                //     children: [],
                // },
            ],
        },
    },
    "plugins": [
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated']
      ]
};