import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    token: "",
    isAuthenticated: false,
    profileType: "client",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticate: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = !!state.token;
            AsyncStorage.setItem("token", state.token);
        },

        login: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = !!state.token;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = !!state.token;
            AsyncStorage.removeItem("token");
        },
    },
});

export const { authenticate, login, logout } = authSlice.actions;

export default authSlice.reducer;
