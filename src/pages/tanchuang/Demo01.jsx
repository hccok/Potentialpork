import PropTypes from "prop-types"
import "@/assets/style.scss"
import { useState } from "react"

// <Button type="promary">确定</Button>
function Button(props) {
    let { type, children, onClick } = props;
    return (
        <div className="ml-button">
            {/* onClick 叫React的合成事件 */}
            <span className={type} onClick={onClick}>{children}</span>
        </div>
    )
}
Button.propTypes = {
    type: PropTypes.oneOf(["default", "primary", "danger", "info"]),
    children: PropTypes.node,
    onClick: PropTypes.func,
}
Button.defaultProps = {
    type: 'default',
    children: '按钮',
    onClick: () => { },
}

function ModalHeader(props) {
    let { title, closable, onCancel } = props;
    return (
        <div>
            <div>{title}</div>
            <div onClick={onCancel}>{closable && "X"}</div>
        </div>
    )
}
function ModalFooter(props) {
    let { type, onCancel, onOk, footer } = props;
    let renderFooter = () => {
        let btns = [];
        switch (type) {
            case "confirm":
                btns = [
                    <Button type="primary" key="1" onClick={onOk}>确定</Button>,
                    // Button是组件, onClick是事件函数  是一个特殊的props
                    <Button key="2" onClick={onCancel}>取消</Button>
                ]
                break;
            case "danger":
                btns = [
                    <Button type="danger" key="1" onClick={onOk}>删除</Button>,
                    <Button key="2" onClick={onCancel}>取消</Button>
                ]
                break;
            case "info":
                btns = [
                    <Button type="info" key="1" onClick={onCancel}>我知道了</Button>,
                ]
                break;
        }
        return btns;
    }
    return (
        footer ? footer() : renderFooter()
    )
}

function Modal(props) {
    let { children, visiable, onCancel, width } = props;
    let handerLayer = (e) => {
        if (e.target.dataset.self) {
            onCancel()
        }
    }
    return (
        <div className="ml-layer" style={{ display: visiable ? 'block' : 'none' }} data-self="layer" onClick={handerLayer}>
            <div className="ml-modal" style={{ width: `${width}px`, marginLeft: `-${width / 2}px` }}>
                <header>
                    {/* 叫props穿透 */}
                    <ModalHeader {...props}></ModalHeader>
                </header>
                <main>
                    {
                        children
                    }
                </main>
                <footer>
                    <ModalFooter {...props}></ModalFooter>
                </footer>
            </div>
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.elementType, // jsx, string, null,und, func
    closable: PropTypes.bool,
    children: PropTypes.node,
    type: PropTypes.oneOf(["confirm", "danger", "info"]),
    visiable: PropTypes.bool,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    footer: PropTypes.func,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

Modal.defaultProps = {
    title: "默认小标题",
    closable: true,
    children: <div>主体内容默认值</div>,
    type: "info",
    visiable: false,
    onCancel: () => { },
    onOk: () => { },
    footer: () => { },
    with: 520
}

function PageA() {
    // 定义一个状态控制弹窗是否显示
    let [visiable, setVisiable] = useState(false)
    let submit = () => {
        setTimeout(() => {
            console.log("submit...");
            console.log("发送ajax请求...");

            setVisiable(false)
        }, 200)
    }
    return (
        <div>
            <button onClick={() => setVisiable(true)}>open modal</button>
            {/* 如果一个props是一个事件函数,建议使用on打头 */}
            <Modal
                title={"添加用户"}
                closable
                type="confirm"
                visiable={visiable}
                onCancel={() => setVisiable(false)}
                onOk={submit}
                footer={
                    () => {
                        return [
                            <Button type='danger' key="1" onClick={() => setVisiable(false)}>残忍离开</Button>,
                            <Button type='primary' key="2">确定</Button>
                        ]
                    }
                }
                width={800}
            >
                <div>
                    <input type="text" />
                    <div>你确定要添加此用户吗?</div>
                </div>
            </Modal>
        </div>
    )
}
export default PageA;