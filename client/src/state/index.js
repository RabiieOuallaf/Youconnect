import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode : "light",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = () => {

    name: "auth",
    initialState,
    reducers : {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        }

        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }

        setLogout: (state) => {
            state.user = null;
            state.token = null;
        }

        setFriends: (state, action) => {
            if(state.user){
                state.user.friends = action.payload.friends;
            }else {
                console.log("user friends does not exsit");
            }
        }
    }

};