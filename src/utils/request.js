//axios的封装处理
import axios from "axios";
import {getToken} from "@/utils/token";


//1.根域名配置
//2.超时时间
//3.请求拦截器/响应拦截器

const request = axios.create({
        baseURL: 'http://localhost:8888/',
        timeout: 5000
    }
);

//添加请求拦截器
//请求发送之前 做拦截 插入一些自定义配置 {参数的处理}
request.interceptors.request.use((config) => {
    //操作这个 config注入token数据
    //1.获取到token
    //2.按照后端的格式要求做token 拼接
     const token = getToken();
     if(token){
         config.headers.Authorization = `Bearer ${token}`;
     }
        return config
    },(error) => {
        return Promise.reject(error)
    }
)
//添加响应拦截器
//在响应返回客户但之前 做拦截 重点处理返回的数据
request.interceptors.response.use((response) => {
    return response.data
},(error) => {
    return Promise.reject(error)
})

export {request}