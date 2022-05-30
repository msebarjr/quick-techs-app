import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: "",
    email: "",
    type: "",
    isLoggedIn: false,
    location: {
        long: "",
        lat: "",
    },
    jobs: [],
    projects: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUserProfile: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.type = action.payload.type;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        updateUserId: (state, action) => {
            state.id = action.payload.id;
        },
        loginUser: (state) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
        },
    },
});

export const { createUserProfile, updateUserId, loginUser, logoutUser } =
    userSlice.actions;

export default userSlice.reducer;
