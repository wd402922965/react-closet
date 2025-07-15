import {Outlet, useLocation, useNavigate} from "react-router-dom";
import { TabBar } from 'antd-mobile'
import { ReactComponent as ClosetIcon } from "@/icon/closet.svg";


import './index.scss';
import {
    StarOutline,
    ReceiptOutline,
    UserOutline,
} from 'antd-mobile-icons'

const tabs = [
    {
        key: '/newArrival',
        title: '今日上新',
        icon: <StarOutline style={{ width: 24, height: 24, color: 'pink' }}/>,
    },
    {
        key: '/closet',
        title: '衣柜',
        icon: <ClosetIcon style={{ width: 24, height: 24, color: 'pink' }} />
    },
    {
        key: '/deposit',
        title: '定金',
        icon: <ReceiptOutline style={{ width: 24, height: 24, color: 'pink' }}/>,
    },
    {
        key: '/me',
        title: '我的',
        icon: <UserOutline style={{ width: 24, height: 24, color: 'pink' }}/>,
    },
]

function Layout(){
    const navigate = useNavigate();

    const location = useLocation(); // ← 关键：获取当前路径
    const { pathname } = location;

    const switchRoute = (path) =>{
        navigate(path);
    }

    return (
        <div className="layout">
            <div className="container">
                <Outlet/>
            </div>
            <div className="footer">
                <TabBar onChange={switchRoute} activeKey={pathname}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        </div>
    )
}

export default Layout;