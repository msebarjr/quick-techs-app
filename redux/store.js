import { configureStore } from "@reduxjs/toolkit";

// Reducers
import authReducer from "./reducers/authSlice";
import clientReducer from "./reducers/clientSlice";
import techReducer from "./reducers/techSlice";
import userReducer from "./reducers/usersSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        client: clientReducer,
        tech: techReducer,
        user: userReducer,
    },
});
