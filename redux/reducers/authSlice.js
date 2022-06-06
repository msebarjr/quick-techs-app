import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    token: "",
    isAuthenticated: false,
    profileType: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticate: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = !!state.token;
            state.profileType = action.payload.profileType;
        },
        login: (state, action) => {
            state.token = action.payload.storedToken;
            state.isAuthenticated = !!state.token;
            state.profileType = action.payload.profileType;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = !!state.token;
            AsyncStorage.removeItem("token");
        },
    },
});

export const { authenticate, authenticateProfile, login, logout, setProfile } =
    authSlice.actions;

export default authSlice.reducer;
