import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({

    name : "basketSlice",
    initialState : [],
    reducers : {
        getProductFromBasket : (state) => {
            return [...state];
        },
        addProductToBasket : (state, action) => {
            let existingProduct = state.find((product) => product.id === action.payload.id);

            if (existingProduct) 
                existingProduct.quantity += 1
            else 
                return [ ...state, {...action.payload, quantity : 1}];
        },
        delateProductFromBasket : (state, action) => {
            
            return state.filter((product) => product.id !== action.payload.id);
        },
        clearProductsFromBasket : () => {
            return [];
        },
    }

});

export const { getProductFromBasket, addProductToBasket, delateProductFromBasket ,clearProductsFromBasket } =basketSlice.actions;
export default basketSlice.reducer;
