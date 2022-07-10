import { createSlice } from '@reduxjs/toolkit';

export const sideNavbarSlice = createSlice({
  name: 'sideNavbar',
  initialState: { showNavbar: false },
  reducers: {
    OPEN_NAVBAR: (state) => {
      state.showNavbar = true;
    },
    CLOSE_NAVBAR: (state) => {
      state.showNavbar = false;
    },
  },
});

export const { OPEN_NAVBAR, CLOSE_NAVBAR } = sideNavbarSlice.actions;

export default sideNavbarSlice.reducer;
