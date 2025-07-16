import {FloatingBubble, ActionSheet, Popup} from "antd-mobile";
import { HeartFill } from 'antd-mobile-icons'
import './index.scss'
import {useState} from "react";
import AddClothe from "@/pages/Layout/Closet/AddClothe";


function Bubble({closetList, onFilter}){
    const [offset, setOffset] = useState({ x: -24, y: -24 })
    const [visible, setVisible] = useState(false)
    const [visibleCloseRight, setVisibleCloseRight] = useState(false)

    const mockContentWithCloseIcon = (
        <AddClothe/>

    )

    const actions = [
        {
            text: '新增',
            key: 'add' ,
            onClick: () => {
                setVisibleCloseRight(true);
            },
        },
        {
            text: '按时间排序',
            key: 'oderByTime' ,
            onClick: () => {
                listOrderBy('time');
            },
        },
        {
            text: '按价格排序',
            key: 'orderByPrice',
            onClick: () => {
                listOrderBy('price');
            },
        },
    ]

    //根据时间/价格排序
    const listOrderBy = (val) => {
        let res = [];
        const copy = [...closetList];
        if(val === 'time'){
            res = copy.sort((a, b) => new Date(b.date) - new Date(a.date));
        }else{
            res = copy.sort((a, b) => parseInt(b.price) -  parseInt(a.price));
        }

        onFilter(res);
    }


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

            <Popup
                position='right'
                visible={visibleCloseRight}
                showCloseButton
                onClose={() => {
                    setVisibleCloseRight(false)
                }}
            >
                {mockContentWithCloseIcon}
            </Popup>

        </div>
    );
}

export default Bubble;