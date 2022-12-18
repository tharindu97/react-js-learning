import axios from "axios";

export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

function fetchTodosLoading(isLoading) {
    return {
        type: FETCH_TODOS_LOADING,
        payload: isLoading,
    }
}

function fetchTodosSuccess(todos) {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos,
    }
}

export function fetchTodos() {
    return async function (dispatch, getState) {
        dispatch(fetchTodosLoading(true));
        const result = await axios.get(TODOS_URL);
        dispatch(fetchTodosSuccess(result.data));
        dispatch(fetchTodosLoading(false));
    }
}