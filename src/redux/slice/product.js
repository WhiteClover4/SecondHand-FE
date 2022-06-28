import { createSlice } from '@reduxjs/toolkit';

export const prodcutSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    SET_PRODUCT: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { SET_PRODUCTS, SET_PRODUCT } = prodcutSlice.actions;

export default prodcutSlice.reducer;
