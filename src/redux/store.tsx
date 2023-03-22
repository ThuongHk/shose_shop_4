import { configureStore } from "@reduxjs/toolkit";
import productDetailSlice from "./reducer/productDetailSlice";
import productSlice from "./reducer/productSlice";
import userLoginSlice from "./reducer/userLoginSlice";


const store = configureStore({
    reducer: {
        productSlice,
        productDetailSlice,
        userLoginSlice
    }
})

export default store

export type RootState = ReturnType <typeof store.getState>;
export type DispatchType = typeof store.dispatch