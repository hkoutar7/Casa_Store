import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import basketReducer from "./reducer/basketSlice";

export const store = configureStore({
    
    reducer: {
        "products" : productReducer,
        "basket" : basketReducer,
    },

});
