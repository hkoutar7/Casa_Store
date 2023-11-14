import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import basketReducer from "./reducer/basketSlice";
import categoryReducer from "./reducer/categorySlice";

export const store = configureStore({
    
    reducer: {
        "products" : productReducer,
        "basket" : basketReducer,
        "category" :categoryReducer,
    },

});
