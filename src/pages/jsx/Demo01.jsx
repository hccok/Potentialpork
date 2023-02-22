
// 在React中，函数有两种写法
//    类组件
//    函数组件（主流）

// 体验组件书写
import { Component } from "react"


// 类组件，叫class组件，在N年前，写react基本在上都是类组件
// 特点：使用的是ES6中面试对象的语法，里面有生命周期，有this, 有state，有上下文，有ref
// 缺点：相比函数式组件，性能差一点，类组件写法，已经不是主流了。但是需要掌握。
class DemoA extends Component {
  // 类组件必须要写一个生命周期函数
  render() {
    // 在render函数中需要返回视图模板（类似于vue中的template模板）
    return (
      <h2>类组件</h2>
    )
  }
}

// 函数式组件
// 函数名必须大写，这种写法，不是新的写法，自从React诞生就有这种写法
// 特点：使用的函数式编程，里面没有生命周期，没有this, 没有state，没有上下文，没有ref
// 优点：相比类组件来来说，性能高一点
// 函数式组件需要配合hook，达到类组件中的功能。hook类似于vue3中的组合api。
function DemoB() {
  return (
    <h1>函数式组件</h1>
  )
}

export default DemoB;





