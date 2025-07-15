import {createSlice} from "@reduxjs/toolkit";
import {request} from "@/utils";

const newArrivalStore = createSlice({
    name: 'new',
    //初始状态
    initialState:{
        imageList:[]
    },
    //同步修改方法
    reducers:{
        setImageList(state,action){
            state.imageList = action.payload;
        }
    }
})

const {setImageList} = newArrivalStore.actions;
const render = newArrivalStore.reducer;



//异步获取图片列表
function getImageList(){
    return async (dispatch)=>  {
        const res = await request.get('imageList');
        dispatch(setImageList(res));
    }
}

export {getImageList};

export default render;