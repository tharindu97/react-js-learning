import { configureStore } from "@reduxjs/toolkit";
import { galleryReducer } from "./gallery/gallerySlice";
import { themeReducer } from "./theme/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        gallery: galleryReducer,
    },
})

export default store;