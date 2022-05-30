import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: "",
    type: "",
    location: {
        long: "",
        lat: "",
    },
    projects: [],
};

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        createClientProfile: (state, action) => {
            state.name = action.payload.name;
        },
        updateClientId: (state, action) => {
            state.id = action.payload.id;
        },
    },
});

export const { createClientProfile, updateClientId } = clientSlice.actions;

export default clientSlice.reducer;
