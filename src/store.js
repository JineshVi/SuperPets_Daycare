import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

//Configuring the store using Reducers defined in userSlice file
const store = configureStore({
    reducer:{
        user: userReducer,
    } 
});

export default store;