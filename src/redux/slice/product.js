import { createSlice } from '@reduxjs/toolkit';
import { initialProductInput } from '../../utils/initial';

export const productSlice = createSlice({
  name: 'product',
  initialState: { productInput: initialProductInput },
  reducers: {
    SET_PRODUCT_INPUT: (state, action) => {
      state.productInput = action.payload;
    },
    ADD_IMAGE_PRODUCT: (state, action) => {
      state.productInput.images.push(action.payload);
    },
    REMOVE_IMAGE_PRODUCT: (state, action) => {
      state.productInput.images.splice(action.payload, 1);
    },
  },
});

export const { SET_PRODUCT_INPUT, ADD_IMAGE_PRODUCT, REMOVE_IMAGE_PRODUCT } = productSlice.actions;

export default productSlice.reducer;
