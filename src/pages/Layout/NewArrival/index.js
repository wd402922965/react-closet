import React, {useEffect} from 'react';
import { Carousel, Image, Divider } from 'antd';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {getImageList} from "@/store/modules/newArrival";

const titleList = [
    {
        'type':"deposit",
        'title':'本月定金'
    },
    {
        'type':"finalPay",
        'title':'本月尾款'
    }
];

function NewArrival() {
    //获取图片列表
    const {imageList} =  useSelector(state => state.newArrival)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getImageList())
    }, [dispatch]);

    return (
        <div className="carousel-wrapper">
            {titleList.map((item, index) => (
                <div key={index} className="carousel-section">
                    <Divider className="carousel-title">{item.title}</Divider>
                        <Carousel autoplay dotPosition="bottom">
                            {imageList.filter((image) => image.type ===  item.type).map((image,index) => {
                                    return (
                                        <div key={index} className="carousel-slide">
                                            <Image
                                                preview={false}
                                                src={image.url}
                                                className="carousel-image"
                                            />
                                        </div>
                                    )
                                }
                            )}
                        </Carousel>
                </div>
            ))}
        </div>
    );
}

export default NewArrival;
