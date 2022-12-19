import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return result.data;
});


const todoSlice = createSlice({
    name: "todo",
    initialState: {
       loading: false,
       todos: [],
       error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export const todoReducer = todoSlice.reducer;
