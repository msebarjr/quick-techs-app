import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import techReducer from "./reducers/techSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tech: techReducer,
    },
});
