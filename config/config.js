const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ProgressPlugin, ProvidePlugin } = require("webpack")

module.exports = {
    entry: {
        // app: path.resolve(__dirname, "../", "src/main.js")

        chunk: ['react', 'react-dom/client'],
        app: {
            // import是用来指定业务代码的入口
            import: path.resolve(__dirname, "../", "src/main.js"),
            dependOn: "chunk"
        }
    },
    // 出口
    output: {
        path: path.resolve(__dirname, "../", "dist"),
        filename: "js/[name].[chunkhash:8].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: "./public/index.html"
            template: path.resolve(__dirname, "../", "public/index.html"),
            inject: "body", // 把打包后的js文件插入到body结束标签之前
            title: "vue-element-admin",
            favicon: path.resolve(__dirname, "../", "public/favicon.ico"),
            filename: "index.html"
        }),
        new ProgressPlugin({
            handler(percentage, message, ...args) {
                if (percentage === 1) {
                    console.log("100% 打包/启动成功~");
                } else {
                    console.log(`${Math.floor((percentage * 100))}% 正在打包...`)
                }
            }
        }),
        new ProvidePlugin({
            React: path.resolve(__dirname, "../", "node_modules/react/index.js"),
        })
    ],
    // loader 加载器  在webpack处理某些模块之前，先使用loader进行处理
    module: {
        rules: [
            // 当webpack工作时，遇到了以.js结尾的模块，先使用babel-loader进行加载
            // 当loader加载完后，还需要使用一些@babel/*  进行语法转化，转化成ES5代码
            // exclude: /node_modules/ 让node_moduels中的代码不参与打包
            { test: /\.(js|jsx|ts|tsx)$/, use: "babel-loader", exclude: /node_modules/ },

            // 当webpack工作时，遇到了以.css结尾的模块，使用css-loader加载解析返回内容交给style-loader来处理
            // style-loader可以把css-loader处理后结果，以操作DOM的形式，插入到head标签中，就是内部样式。
            { test: /\.(css|scss)$/, use: ["style-loader", "css-loader", "sass-loader"] },


            // { test: /\.scss$/, use: ["style-loader", "css-loader","sass-loader"] }


            // { test: /\.(png|jpg|svg|gif|jpeg|webp)$/, use: "file-loader" },

            // { test: /\.(png|jpg|svg|gif|jpeg|webp)$/, use: "url-loader" },


            // type: "asset/resource"  相当于使用了file-loader
            {
                test: /\.(png|jpg|svg|gif|jpeg|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[contenthash:8][ext]'
                }
            },
        ]
    },
    resolve: {
        alias: {
            // 配置解析src路径
            "@": path.resolve(__dirname, "../", "src")
        },
        // 配置允许省略哪些后缀
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
    }
}

