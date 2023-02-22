


module.exports = {
    // @babel/preset-env 编译大部分的ES6语法
    // 除了上面的预设，还有其它的预设，如：编译ts，编译vue，编译jsx，编译flow....
    // @vue/cli-plugin-babel/preset 
    presets: [
        ["@babel/preset-env"],  // 编译es6语法
        ["@babel/preset-react"],  // 编译jsx语法
    ],
    // 插件，有些语法，预设搞不定，需要通过插件来处理
    plugins: [
        ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
        "@babel/plugin-proposal-class-properties"
    ]
}