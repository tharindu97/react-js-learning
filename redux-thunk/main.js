import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { fetchTodos } from "./todo/todoAction";
import { todoReducer } from "./todo/todoReducer";

const rootReducer = combineReducers({todo: todoReducer})

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

store.dispatch(fetchTodos());