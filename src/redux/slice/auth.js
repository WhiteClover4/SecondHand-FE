import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || '',
    isLogin: false,
  },
  reducers: {
    SET_TOKEN: (state, action) => (state.token = action.payload),
    CHANGE_LOGIN: (state, action) => (state.isLogin = action.payload),
  },
});

export const { SET_TOKEN, CHANGE_LOGIN } = authSlice.actions;

export default authSlice.reducer;
