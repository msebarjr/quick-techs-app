import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: "",
    location: {
        long: "",
        lat: "",
    },
    isLoggedIn: false,
    jobs: [],
    projects: [],
};

export const techSlice = createSlice({
    name: "tech",
    initialState,
    reducers: {
        createTech: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.isLoggedIn = action.payload.loggedIn;
        },
    },
});

export const { createTech } = techSlice.actions;

export default techSlice.reducer;
