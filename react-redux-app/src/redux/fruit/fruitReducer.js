import { BUY_FRUIT } from "./fruitActionTypes";

const initialState = {
    noOfFruits: 10,
};

export default function fruitReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_FRUIT:
            return {
                ...state,
                noOfFruits: state.noOfFruits - action.payload,
            };
        default:
            return state;
    }
}