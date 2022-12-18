import { createSlice } from "@reduxjs/toolkit";

const fruitSlice = createSlice({
    name: "fruit",
    initialState: {
        noOfFruits: 5,
    },
    reducers: {
        buyFruit: (state, action) => {
            state.noOfFruits--;
        },
        addFruit: (state, action) => {
            state.noOfFruits++;
        }
    }
});

export const fruiReducer = fruitSlice.reducer;
export const { buyFruit, addFruit } = fruitSlice.actions;