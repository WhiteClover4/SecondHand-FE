import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'auth',
  initialState: {
    userData: { name: '', email: '', city: '' },
  },
  reducers: {
    SET_USER_DATA: (state, action) => (state.userData = action.payload),
  },
});

export const { SET_USER_DATA } = profileSlice.actions;

export default profileSlice.reducer;
