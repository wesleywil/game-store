import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart";
import gameReducer from "./games/games";


export const store = configureStore({
    reducer:{
        games:gameReducer,
        cart:cartReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;