import { createSlice } from '@reduxjs/toolkit';
import { initialProduct } from '../../utils/initial';

export const productSlice = createSlice({
  name: 'product',
  initialState: { newProduct: initialProduct },
  reducers: {
    SET_NEW_PRODUCT: (state, action) => {
      state.newProduct = action.payload;
    },
  },
});

export const { SET_NEW_PRODUCT } = productSlice.actions;

export default productSlice.reducer;
