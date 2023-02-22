

// module.exports = {
//     // 当运行npm run sreve时   期望  serve.js和config.js生效
//     // 当运行npm run build时   期望  build.js和config.js生效
//     // 需要通过配置env来确定是什么模式的打包
// }

// ----------------------------------------

// module.exports = function (env) {
//     // console.log("--env:", env);

//     let { development } = env;

//     if (development) {
//         // 开发环境  期望  serve.js和config.js生效

//     } else {
//         // 生产环境   期望  build.js和config.js生效
//     }
//     return {

//     }
// }

// ----------------------------------------

const { merge } = require("webpack-merge")

const config = require("./config/config")
const serve = require("./config/serve")
const build = require("./config/build")

// module.exports = function ({ development }) {
//     if (development) return { merge(config, serve) }
//     else return { merge(config, build) }
// }

module.exports = function ({ development }) {
    return merge(config, development ? serve : build)
}











