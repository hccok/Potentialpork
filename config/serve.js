const ESLintPlugin = require("eslint-webpack-plugin")
module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 8888,
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        }
    },
    plugins: [
        // 这个插件仅仅是把eslint集成到webpack中
        // 还需要下载eslint
        new ESLintPlugin({
            eslintPath: "eslint", // 指定使用什么对代码校验
            extensions: ['js', 'jsx', 'ts', 'tsx'], // 对哪些模块的代码进行校验
            exclude: ['node_modules'], // 不对node_modules中的代码进行校验，可以提升打包速度 
            fix: false, // 关闭自动修复功能， 一般情况下都是关闭的
            formatter: "stylish"
        })
    ]
}


