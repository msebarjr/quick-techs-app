import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticate: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = !!state.token;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = !!state.token;
        },
    },
});

export const { authenticate, logout } = authSlice.actions;

export default authSlice.reducer;
