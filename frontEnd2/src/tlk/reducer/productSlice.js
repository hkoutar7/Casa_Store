import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/products";

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async () => {
    const res = await  axios.get(URL);
    if (res.status === 200)
        return res.data;
});



const productSlice = createSlice({

    name : "productSlice",
    initialState : [],
    reducers : {
    },
    extraReducers : (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        });
    }

})

export default productSlice.reducer;