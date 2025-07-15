import {FloatingBubble,ActionSheet} from "antd-mobile";
import { HeartFill } from 'antd-mobile-icons'
import './index.scss'
import {useState} from "react";


function Bubble(){
    const [offset, setOffset] = useState({ x: -24, y: -24 })
    const [visible, setVisible] = useState(false)

    const actions = [
        { text: '新增', key: 'add' },
        { text: '按时间排序', key: 'oderByTime' },
        { text: '按价格排序', key: 'orderByPrice' },
    ]

    return (
        <div className="closetBubble">
            <FloatingBubble className="closetBubble"
                            axis='xy'
                            style={{
                                '--initial-position-bottom': '30px',
                                '--initial-position-right': '0',
                            }}
                            onOffsetChange={offset => {
                                setOffset(offset)
                            }}
                            offset={offset}
                            onClick={() => setVisible(true)}
            >
                <HeartFill fontSize={32}/>
            </FloatingBubble>
            <ActionSheet
                visible={visible}
                actions={actions}
                onClose={() => setVisible(false)}
            />
        </div>
    );
}

export default Bubble;