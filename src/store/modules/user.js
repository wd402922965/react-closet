//用户相关的状态管理

import {createSlice} from "@reduxjs/toolkit";
import {request} from '@/utils';
import {getToken,setToken as _setToken} from "@/utils";


const userStore = createSlice({
    name: 'user',
    //初始状态
    initialState:{
        token:getToken() || ''
    },
    //同步修改方法
    reducers:{
        setToken(state,action){
            state.token = action.payload;
            //localstorage存一份
            _setToken(action.payload);
        }
    }
})

const {setToken} = userStore.actions;

const userReducer = userStore.reducer;

//异步方法 完成登录获取token
function fetchLogin(loginForm){
    return async (dispatch) => {
        //1.发送异步请求
       const res = await request.get('authorizations',loginForm);
       //2.提交同步action进行token的存入
        dispatch(setToken(res.token));
    }
}

export {setToken,fetchLogin};
export default userReducer;