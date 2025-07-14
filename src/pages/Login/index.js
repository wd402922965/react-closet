import {Card, Space, Form, Button, Input, message} from 'antd';
import './index.scss';
import {useDispatch} from "react-redux";
import {fetchLogin} from "@/store/modules/user";
import {useNavigate} from "react-router-dom";


function Login(){
    const dispatch = useDispatch();//触发函数
    const navigate = useNavigate();//跳转函数

    //表单登录成功
    const onFinish = (values) => {
        //出发异步action fetchLogin -> 感觉这里方法最好是同步
        dispatch(fetchLogin());
        //发送成功信息后跳转首页
        message.success({
            className:"messageCls",
            content:"login successful!"
        }).then(() => navigate('/'));
    };
    //表单登陆失败
    const onFinishFailed = values => {
        message.error({
            className:"messageCls",
            content:"login error!"
        })
    }


    return (
        <div className="login">
            <Space direction="vertical" size={16}>
                <Card title="登录你的衣柜" style={{ width: 300 }} className="title">
                    <Form validateTrigger="onBlur" onFinish={onFinish}
                          onFinishFailed={onFinishFailed}>
                        <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' },{
                            pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/,
                            message: 'Please enter a valid email address!'
                        }]} >
                            <Input size="large" placeholder="Email" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input size="large" type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item >
                                <Button color="pink" variant="solid" htmlType="submit" size="large" block>login</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Space>
        </div>
    )
}

export default Login;