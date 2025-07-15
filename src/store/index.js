import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./modules/user";
import newArrivalRender from './modules/newArrival';
import closetRender from './modules/closet';

export default configureStore({
    reducer:{
        user: userReducer,
        newArrival : newArrivalRender,
        closet: closetRender
    }
})

