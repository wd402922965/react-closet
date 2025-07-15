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
        }
    }
})

const {setClosetList} = closetStore.actions;
const reducer = closetStore.reducer;

function getClosetList(){
    return async (dispatch)=>  {
        const res = await request.get('myClosetList');
        dispatch(setClosetList(res));
    }
}

export {getClosetList,setClosetList};
export default reducer;