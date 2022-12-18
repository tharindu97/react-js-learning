import { FETCH_ALBUM_ERROR, FETCH_ALBUM_LOADING, FETCH_ALBUM_SUCCESS } from "./albumActionTypes";

const initialState = {
    loading: true,
    albums: [],
    error: null,
};

export default function albumReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALBUM_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        case FETCH_ALBUM_SUCCESS:
            return {
                ...state,
                albums: action.payload,
            };
        case FETCH_ALBUM_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}