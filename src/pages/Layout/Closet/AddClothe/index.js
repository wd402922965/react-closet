import './index.scss'
import {DatePicker, Divider, Form, ImageUploader, Input, Modal, Toast} from "antd-mobile";
import { useState,useRef} from 'react'
import {Button, Radio, Space} from "antd";
import dayjs from "dayjs";
import {imageUpload} from '@/utils/imageUtils'
import {useDispatch, useSelector} from "react-redux";
import BrandSelector from "@/pages/Layout/Closet/BrandSelector";
import {addClothList} from "@/store/modules/closet";
import { v4 as uuidv4 } from 'uuid';

function AddClothe(){
    const now = new Date()
    const [visible, setVisible] = useState(false)
    const [brand, setBrand] = useState('');
    const [imageUrl, setImageUrl] = useState([])
    const {userId} = useSelector(state => state.user);
    const formRef = useRef(null);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log(values)
    }

    const getBrand = (brand) => {
        setBrand(brand);
    }

    const handlerClickButton = () => {
        formRef.current?.validateFields()
        if(imageUrl.length === 0){
            Modal.alert({
                content: '请上传一张图片',
                closeOnMaskClick: true,
            }).then();
        }else{
            const values = formRef.current?.getFieldsValue();
            values.id = uuidv4();
            values.date = dayjs(values.date).format('YYYY-MM-DD')
            values.imagUrl = imageUrl[0].url;
            values.brand = brand;

            Modal.confirm({
                content: '确认提交',
                onConfirm: async => {
                    dispatch(addClothList(values));
                    Toast.show({
                        icon: 'success',
                        content: '提交成功',
                        position: 'bottom',
                    })
                }
            }).then(r => {
                formRef.current?.resetFields();
                setImageUrl([]);
            })
        }
    }

    return (
        <div className="AddClotheContainer">
            <Divider>添加新裙子</Divider>
            <ImageUploader
                value={imageUrl}
                showUpload={imageUrl.length < 1}
                onChange={setImageUrl}
                upload={(file) => imageUpload(file, userId)}
            />

            <Form layout='horizontal' mode='card'
                  onFinish={onFinish}
                  initialValues={{
                      contacts: [{}],
                  }}
                  footer={
                      <Button block type='submit' size='large' onClick={() => handlerClickButton()}>
                          提交
                      </Button>
                  }
                  ref={formRef}
            >

                <Form.Item name='name' label='名称' rules={[{required: true}]}>
                    <Input placeholder='请输入名称'/>
                </Form.Item>
                <Form.Item name='brand' label='品牌' rules={[{required: true}]}>
                    <BrandSelector getBrand={getBrand}/>
                </Form.Item>
                <Form.Item name='country' label='类别' rules={[{required: true}]}>
                    <Radio.Group>
                        <Space>
                            <Radio  value='cn'>国牌</Radio >
                            <Radio  value='jp'>日牌</Radio >
                        </Space>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name='price' label='价格' rules={[{required: true},
                    {
                        pattern: /^\d+$/,
                        message: '只能输入数字'
                    }]}>
                    <Input placeholder='请输入价格'/>
                </Form.Item>

                <Form.Item name='date' label='时间' trigger='onConfirm' onClick={ () => { setVisible(true)}}  rules={[{required: true}]}>
                    <DatePicker visible={visible} onClose={() => {setVisible(false)}} initialValues={now} max={now}>
                        {value => value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'}
                    </DatePicker>
                </Form.Item>
            </Form>
        </div>
    );
}

export default AddClothe;