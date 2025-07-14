import React from 'react';
import { Carousel, Image, Divider } from 'antd';
import './index.scss';

const titleList = ['本月定金', '本月尾款'];

function New() {
    //这里应该写两个接口 分组获取图片连接 => 然后进行循环渲染

    return (
        <div className="carousel-wrapper">
            {titleList.map((title, index) => (
                <div key={index} className="carousel-section">
                    <Divider className="carousel-title">{title}</Divider>
                        <Carousel autoplay dotPosition="bottom">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <div key={idx} className="carousel-slide">
                                    <Image
                                        preview={false}
                                        src="https://angelicpretty.com/Contents/Feature/0724Dream-Marine.jpg"
                                        className="carousel-image"
                                    />
                                </div>
                            ))}
                        </Carousel>
                </div>
            ))}
        </div>
    );
}

export default New;
