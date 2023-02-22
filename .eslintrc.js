module.exports = {
    parser: "@babel/eslint-parser", // 对ES6+新特性做更好的代码检测
    // 解析配置
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true  // 开启jsx的校验，因为是react开发，必写
        }
    },
    // 集成airbnb对React代码校验
    extends: ["airbnb", "airbnb/hooks"],
    // 自定义的校验规则
    "rules": {
        // 如果语句没有分号就报错
        "semi": "error",

        // 如果代码中出现console就报错
        // "no-console": "error",


        "no-console": "warn",

        // 关闭规则：0 off
        // 如果规则不写，也代表关闭规则
        // "no-console": "off",

        "no-undef": "off",

        "react/jsx-filename-extension": "off"
    }
}