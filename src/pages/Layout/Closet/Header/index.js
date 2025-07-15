import {SearchBar} from "antd-mobile";
import {Segmented} from "antd";
import './index.scss'
import {useMemo, useState} from "react";

function Header({closetList, onFilter}){
    const [brand, setBrand] = useState('全部');

    const countryMap = {'日牌':'jp','国牌':'cn','全部':'all'}


    // Segmented 每次切换都会把当前 value 传进来
    const handleChange = (val) => {
        setBrand(val);      // 更新选中项
        let res = []

        if(countryMap[val] !== 'all' ){
            res = closetList.filter(item => (item.country === countryMap[val] || item.brand === val));
        }else{
            res = closetList;
        }
        onFilter(res);
    };
    const option = ['全部','日牌', '国牌', 'BABY, THE STARS SHINE BRIGHT', 'angelicPretty'];//后期会做成自定义配置？ ==> 收集用户的衣柜数据，根据品牌可以进行分类，从而可以选择以下品牌作为标签

    return (
        <div className="closetHeader">
            <SearchBar
                placeholder='请输入品牌或名称'
                className="closetSearch"
            />
            <Segmented
                className="closetSegmented"
                block
                options={option}
                onChange={handleChange}  // ← 关键在这里
                value={brand}      // 受控
            />
        </div>
    )
}

export default Header;