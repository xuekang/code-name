module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser"
  },

  // add your custom rules here
  //it is base on https://www.jianshu.com/p/db33350d8f72
  // off    | 0 :表示关闭规则。
  // warn   | 1 :表示将该规则转换为警告。
  // error  | 2 :表示将该规则转换为错误
  rules: {
    "eqeqeq": 2,//必须使用全等
    "no-unused-vars": 0,//不能有声明后未被使用的变量或参数 [2, {"vars": "all", "args": "after-used"}]
  }
}
