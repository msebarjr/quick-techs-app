import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: "",
    type: "",
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
        createTechProfile: (state, action) => {
            state.name = action.payload.name;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        updateTechId: (state, action) => {
            state.id = action.payload.id;
        },
    },
});

export const { createTechProfile, updateTechId } = techSlice.actions;

export default techSlice.reducer;
