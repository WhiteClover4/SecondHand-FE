import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userData: {
      name: '',
      email: '',
      city: '',
      address: '',
      phone_number: '',
      profile_picture: '',
      file: null,
    },
  },
  reducers: {
    SET_USER_DATA: (state, action) => {
      state.userData = action.payload;
    },
    SET_USER_NAME: (state, action) => {
      state.userData.name = action.payload;
    },
    SET_USER_CITY: (state, action) => {
      state.userData.city = action.payload;
    },
    SET_USER_PHONE_NUMBER: (state, action) => {
      state.userData.phone_number = action.payload;
    },
    SET_USER_ADDRESS: (state, action) => {
      state.userData.address = action.payload;
    },
    SET_USER_PROFILE_PICTURE: (state, action) => {
      state.userData.profile_picture = action.payload;
    },
    SET_USER_FILE: (state, action) => {
      state.userData.file = action.payload;
    },
  },
});

export const {
  SET_USER_DATA,
  SET_USER_NAME,
  SET_USER_CITY,
  SET_USER_PHONE_NUMBER,
  SET_USER_ADDRESS,
  SET_USER_PROFILE_PICTURE,
  SET_USER_FILE,
} = profileSlice.actions;

export default profileSlice.reducer;
