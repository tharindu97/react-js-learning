import { FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from "./todoAction";

const initialState = {
    loading: false,
    todos: [],
};

export function todoReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TODOS_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
}