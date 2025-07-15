import {SearchBar} from "antd-mobile";
import {Segmented} from "antd";
import './index.scss'
import {useState} from "react";

function Header({closetList, onFilter}){
    const [brand, setBrand] = useState('全部');
    const [search,setSearch] = useState('');

    const option = ['全部','日牌', '国牌', 'BABY, THE STARS SHINE BRIGHT', 'angelicPretty'];//后期会做成自定义配置？ ==> 收集用户的衣柜数据，根据品牌可以进行分类，从而可以选择以下品牌作为标签
    const countryMap = {'日牌':'jp','国牌':'cn','全部':'all'}


    // 选项切换
    const optionChange = (val) => {
        setBrand(val);      // 更新选中项
        let res = []
        if(countryMap[val] !== 'all' ){
            res = closetList.filter(item => (item.country === countryMap[val] || item.brand === val));
        }else{
            res = closetList;
        }
        setSearch('');
        onFilter(res);
    };

    //输入框切换
    const searchChange = (val) => {
        setSearch(val);
    }

    //搜索框搜索
    const onSearch = () => {
        let res = [];
        if(countryMap[brand] === 'all' ){
            res = closetList.filter(item => item.name.includes(search));
        }else{
            closetList.filter(item => (item.country === countryMap[brand] || item.brand === brand)).filter(item => item.name.includes(search));
        }

        onFilter(res)
    }

    return (
        <div className="closetHeader">
            <SearchBar
                placeholder='请输入品牌或名称'
                className="closetSearch"
                value={search}
                onBlur={onSearch}
                onChange={searchChange}
            />
            <Segmented
                className="closetSegmented"
                block
                options={option}
                onChange={optionChange}  // ← 关键在这里
                value={brand}      // 受控
            />
        </div>
    )
}

export default Header;