
function A(C) {
    return C
}


@A
class Malu {
    codeing() {
        console.log("正在打代码...");
    }
}

// const fn = () => {
//     console.log("我是箭头函数~");
// }

// fn();

let info = {
    name: "wc",
    child: {
        name: "ml",
        age: 18
    }
}
console.log(info?.child?.age);
export default Malu;