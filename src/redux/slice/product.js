import { createSlice } from '@reduxjs/toolkit';

export const prodcutSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {
      id: 0,
      name: '',
      description: '',
      price: 0,
      status: '',
      category_id: 0,
      isPublished: '',
      Category: {
        id: 0,
        name: '',
      },
      Transactions: {},
    },
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
