import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { fruiReducer } from "./features/fruit/fruitSlice";

const store = configureStore({
    reducer: {
        fruit: fruiReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware(), logger];
    }
});

export default store;