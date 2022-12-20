import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImages = createAsyncThunk("gallery/fetchImages", async (page = 1) => {
    const result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
    return result.data;
});


const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
       loading: false,
       images: [],
       error: null,
       page: 1,
    },
    reducers: {
        nextPage: (state) => {
            state.page++;
        },
        prevPage: (state) => {
            if(state.page > 1) {
                state.page--;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchImages.fulfilled, (state, action) => {
            state.loading = false;
            state.images = action.payload;
        })
        builder.addCase(fetchImages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const galleryReducer = gallerySlice.reducer;
export const { nextPage, prevPage } = gallerySlice.actions;
