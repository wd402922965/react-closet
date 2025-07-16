import {createSlice} from "@reduxjs/toolkit";
import {request} from "@/utils";


const closetStore = createSlice({
    name:'closet',
    initialState:{
        'closetList':[]
    },
    reducers:{
        setClosetList(state,action){
            state.closetList = action.payload;
        },
        //新增衣柜数据
        addCloth(state,action){
            state.closetList.push(action.payload);
        }
    }
})

const {setClosetList,addCloth} = closetStore.actions;
const reducer = closetStore.reducer;

function addClothList(data){
    return async (dispatch)=>  {
        const res = await request.post('myClosetList',data);
        dispatch(addCloth(res));
    }
}

function getClosetList(){
    return async (dispatch)=>  {
        const res = await request.get('myClosetList');
        dispatch(setClosetList(res));
    }
}

export {getClosetList,setClosetList,addClothList};
export default reducer;