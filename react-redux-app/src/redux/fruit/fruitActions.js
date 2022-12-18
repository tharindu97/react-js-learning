import { BUY_FRUIT } from "./fruitActionTypes";

export function buyFruit(noOfFruits) {
    return {
        type: BUY_FRUIT,
        payload: noOfFruits,
    }
}