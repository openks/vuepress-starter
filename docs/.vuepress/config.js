
const fs = require('fs')
const moment = require('moment');
const path = require("path");

//  遍历目录得到文件信息
function walk(path2) {
    var fileNames = fs.readdirSync(path.resolve('./', `./docs/${path2}`))
    let arr = []
    fileNames.forEach(function (fileName) {
        if (/\.md$/.test(fileName) && "README.md" !== fileName) {
            arr.push("/" + path2 + "/" + fileName.replace(".md", ""))
        }
    })
    return arr
}
// console.log([...walk('blog')])

module.exports = {
    title: 'VuePress',
    description: 'Just playing around',
    base: "/vuepress-starter/",
    permalink: "/:year/:month/:day/:slug",
    plugins: [
        '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment
                return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
            }
        }],
    themeConfig: {
        lastUpdated: '上次更新',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'blog', link: '/blog/' },
            { text: '百度', link: 'http://www.baidu.com' }
        ],
        sidebar: [
            ...walk('blog'),
        ],
        sidebarDepth: 2
    }
}