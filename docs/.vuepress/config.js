
var fs = require('fs')

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
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        plugins: ['@vuepress/last-updated'],
        lastUpdated: 'Last Updated',
        nav: [
            { text: '百度', link: 'http://www.baidu.com' }
        ],
        sidebar: [
            ...walk('blog'),
        ],
        sidebarDepth: 2
    }
}