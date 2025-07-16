import {Card} from "antd";
import './index.scss'
import Header from "@/pages/Layout/Closet/Header";
import Bubble from "src/pages/Layout/Closet/Bubble";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getClosetList} from "@/store/modules/closet";

function Closet() {

    //触发函数
    const dispatch = useDispatch();

    //全局closetStore数据及方法
    const {closetList} = useSelector(state => state.closet);
    const {userId} = useSelector(state => state.user);

    //当前展示的数据
    const [currentList, setCurrentList] = useState([]);


    //传用户id获取当前衣柜数据
    useEffect(() => {
        dispatch(getClosetList(userId));
    }, [dispatch, userId]);

    useEffect(() => {
        setCurrentList(closetList); // 原始数据变化时同步
    }, [closetList]);

    const handleFilterClosetList = (filteredList) => {
        setCurrentList(filteredList); // 更新 Redux 中的显示列表
    };

    return (
        <div className="closetPage">
            <Header closetList={closetList} onFilter={handleFilterClosetList} />
            <div className="closetContainer">
                {currentList.map(item =>
                    <Card key={item.id} className="closetCard"
                          styles={{
                              body: {
                                  padding: 6
                              }
                          }}>
                        <div style={{width: '90%', margin: '0 auto'}}>
                            <div className="imageWrapper">
                                <img src={item.imagUrl} alt="dress" className="closetImage"/>
                            </div>
                            <div className="info">
                                <div className="name">{item.name}</div>
                                <div className="brand">{item.brand}</div>
                                <div className="price">¥{item.price}</div>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
            <Bubble closetList={closetList} onFilter={handleFilterClosetList}/>
        </div>
    );
}


export default Closet;

