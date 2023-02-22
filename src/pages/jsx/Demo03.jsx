

import { useState } from "react"
import moment from "moment"
function DemoA() {
    let [todo, setTodo] = useState("")
    let [list, setList] = useState([])
    let confirm = () => {
        if (!todo.trim()) return;
        setList([...list, { id: moment(Date.now()).format("hh:mm:ss"), task: todo }])
        setTodo("")
    }
    let delTodo = (id) => {
        setList(list.filter(ele => ele.id != id))
    }
    let addByEnter = e => {
        if (e.keyCode === 13) {
            confirm();
        }
    }
    return (
        <div>
            <div>
                <input type="text" value={todo}
                    onChange={e => setTodo(e.target.value)}
                    onKeyUp={e => addByEnter(e)}
                />
                <button onClick={confirm}>添加</button>
                <hr />
                <div>
                    {
                        list.map(item => (
                            <div key={item.id}>
                                <span>{item.id}</span>
                                <span>--</span>
                                <span>{item.task}</span>
                                <span onClick={() => delTodo(item.id)}
                                style={{color:'red',fontSize:"12px",marginLeft:"4px"}}
                                >删除</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DemoA;