import { createSlice } from "@reduxjs/toolkit";
import { buyFruit } from "../fruit/fruitSlice";

const pharmacySlice = createSlice({
    name: "pharmacy",
    initialState: {
        noOfPharmacy: 5,
    },
    reducers: {
        buyPharmacyItem: (state, action) => {
            state.noOfPharmacy--;
        },
       
    },
    extraReducers: {
        [buyFruit]: (state,action) => {
            state.noOfPharmacy--;
        }
    }
});

export const pharmacyReducer = pharmacySlice.reducer;
export const { buyPharmacyItem } = pharmacySlice.actions;