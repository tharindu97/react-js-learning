export const BUY_FRUIT = "BUY_FRUIT";
export const ADD_FRUIT = "ADD_FRUIT";

export function buyFruit(fruitName) {
    return {
        type: BUY_FRUIT,
        payload: "Extra Information" + fruitName,
    };
}

export function addFruit(fruitName) {
    return {
        type: BUY_FRUIT,
        payload: "Extra Information" + fruitName,
    };
}