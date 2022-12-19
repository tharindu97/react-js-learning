import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { fruiReducer } from "./features/fruit/fruitSlice";
import { pharmacyReducer } from "./features/pharmacy/pharmacySlice";
import { todoReducer } from "./features/todo/fruitSlice";

const store = configureStore({
    reducer: {
        fruit: fruiReducer,
        pharmacy: pharmacyReducer,
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware(), logger];
    }
});

export default store;