import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({

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
        incrementByOne : (state, action) => {
            let product = state.find((pd) => pd.id === action.payload.id);
            product.quantity += 1;
        },
        decremetByOne : (state, action) => {
            let product = state.find((pd) => pd.id === action.payload.id);
            if (product.quantity > 0)
                product.quantity -= 1;
        },
    }

});

export const {
    getProductFromBasket,
    addProductToBasket,
    delateProductFromBasket,
    clearProductsFromBasket,
    incrementByOne,
    decremetByOne,
} = basketSlice.actions;
export default basketSlice.reducer;
