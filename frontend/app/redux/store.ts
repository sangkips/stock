import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./services/apiSlice";
import AuthReducer from "./features/authSlice";

export const makeStore = () =>
    configureStore({
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: AuthReducer
        },
        devTools: process.env.NODE_ENV !== "production",
    })

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
