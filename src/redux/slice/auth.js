import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isAuthenticated: false,
  },
  reducers: {
    SET_TOKEN: (state, action) => {
      state.token = action.payload;
    },
    CHANGE_AUTH: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { SET_TOKEN, CHANGE_AUTH } = authSlice.actions;

export default authSlice.reducer;
