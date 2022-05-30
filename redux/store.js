import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authReducer from "./reducers/authSlice";
import userReducer from "./reducers/usersSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,

        user: userReducer,
    },
});
