import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/categories?_page=1&_limit=4";

export const fetchCategories = createAsyncThunk(
    "categoryslice/fetchCategories",
    async () => {
        const res = await axios.get(URL);
        if (res.status === 200) return res.data;
    }
);

const categoryslice = createSlice({
    name: "categoryslice",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.fulfilled, (state, action) => {
            return action.payload;
        })
    },
});

export default categoryslice.reducer;
