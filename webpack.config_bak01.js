

// webapck是基于node的，采用的模块化都是commonjs模块化

const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // development 开发模式打包  内存打包   开发项目过程中是内存打包
    // production 生成模式打包  硬盘打包   项目上线肯定是硬盘打包
    mode: "development",
    // 入口
    // entry: "./src/main.js",  // 相对路径
    // entry: path.resolve(__dirname, "src/main.js"),   // 绝对路径
    entry: {
        app: path.resolve(__dirname, "src/main.js")
    },
    // 出口
    output: {
        // 出口必须指定绝对路径
        // path:"./abc"
        path: path.resolve(__dirname, "dist"),
        // bundle 翻译过来是一捆，一束的意思
        // filename:"bundle.js"

        // [name] 格式化字符串，之前是什么名字，现在还是什么名字
        // [chunkhash: 8]  指定hash值  hash不一样，就可以解决浏览器的缓存问题
        filename: "js/[name].[chunkhash:8].js"
    },
    devServer: {
        port: 8080
    },
    // 配置插件，插件是用来增强webpack功能的
    // 只要是插件，都需要去new
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}










