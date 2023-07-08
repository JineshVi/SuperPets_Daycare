import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoggedIn: false
}

//Creating a slice for configuring redux store
const userSlice = createSlice({
    name: 'user',
    //initialState: [],
    initialState,
    reducers: {
        //reducer to add a new user to the redux store
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.users = [];
            state.isLoggedIn = false;
        }
    },
});

export const { addUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;