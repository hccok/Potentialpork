


import { Component } from "react"

// class DemoA extends Component {
//   render() {
//     // 在类组件中是有this
//     console.log(this);
//     // this表示当前组件实例
//     return (
//       <div>我是一个孤独的div</div>
//     )
//   }
// }

// ------------------------------------

// class DemoA extends Component {
//   // React中，每一个生命周期都非常重要
//   constructor() {
//     super();  // 调用父组件的constructor

//     console.log("constructor...");
//   }
//   componentDidMount() {
//     console.log("componentDidMount...");
//   }
//   render() {
//     console.log("render...");
//     return (
//       <div>我是一个孤独的div</div>
//     )
//   }
// }

// // ------------------------------------

// class DemoA extends Component {
//   constructor() {
//     super();
//     // 定义状态
//     this.state = {
//       counter: 1
//     }
//   }
//   add() {
//     // 在React中，修改状态的唯一途经是setState来修改
//     // this.state.counter + 1  表示拿到老的状态后+1,然后赋值给counter
//     // 调用了setState后，会重新render    re-render
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate...");
//   }
//   render() {
//     console.log("render...");
//     // 父传递给子的数据，都在this.props上面
//     console.log(this.props);
//     return (
//       <div>
//         <h3>{this.state.counter}</h3>
//         {/* onClick={() => this.add()} 叫事件绑定，后面讲 */}
//         <button onClick={() => this.add()}>+1</button>
//       </div>
//     )
//   }
// }

// // ------------------------------------

// class DemoA extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 1
//     }
//   }
//   add() {
//     this.setState({
//       counter: this.state.counter + 1
//     })
//   }
//   render() {
//     let { a, b } = this.props;
//     let { counter } = this.state;
//     console.log(a, b);
//     return (
//       <div>
//         <h3>{counter}</h3>
//         <button onClick={() => this.add()}>+1</button>
//       </div>
//     )
//   }
// }

// ------------------------------------

// class DemoA extends Component {
//   constructor() {
//     super();
//   }
//   componentDidMount() {
//     this.refs.box.style.color = "red"
//   }
//   render() {
//     return (
//       <h1 ref="box">类组件</h1>
//     )
//   }
// }

// ------------------------------------

// 特点：没有this，没有state，没有生命周期，没有是上下文，没有ref，函数式编程
// 优点：性能更好一点
// 从16.8开始，React新增了hook，这些hook，配合函数式组件实现，可以实现类组件中的功能。

// import { useState } from "react"
// function DemoA() {
//   let [counter, setCounter] = useState(1)
//   return (
//     <div>
//       <h1>函数式组件----{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+1</button>
//     </div>
//   )
// }


// ------------------------------------


// import { useState, useEffect } from "react"
// function DemoA() {
//   let [counter, setCounter] = useState(1)

//   // 下面的写法，等价于类组件中的componentDidMount钩子函数
//   // useEffect(() => {
//   //   console.log("页面渲染完成~");
//   // }, []);

//   // [counter]是依赖，当依赖发生了变化，useEffect中的函数会重新执行
//   // 下面的写法，等价于类组件中的componentDidMount钩子函数  和 componentDidUpdate
//   useEffect(() => {
//     console.log("页面渲染完成/更新完成~");
//   }, [counter]);
//   return (
//     <div>
//       <h1>函数式组件----{counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>+1</button>
//     </div>
//   )
// }

// ------------------------------------

import { useState, useEffect, useRef } from "react"
function DemoA() {
  let [counter, setCounter] = useState(1)
  let box = useRef(null)

  useEffect(() => {
    console.log("页面渲染完成/更新完成~");
    console.log(box.current.style.color = "blue");
  }, [counter]);

  return (
    <div>
      <h1 ref={box}>函数式组件----{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}




export default DemoA;