import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
  name: 'alert',
  initialState: { alerts: [] },
  reducers: {
    SET_ALERT: (state, action) => {
      state.alerts = action.payload;
    },
    ADD_ALERT: (state, action) => {
      state.alerts.push(action.payload);
    },
    REMOVE_ALERT: (state, action) => {
      state.alerts.splice(action.payload, 1);
    },
    REMOVE_ALL_ALERTS: (state) => {
      state.alerts = [];
    },
  },
});

export const { SET_ALERT, ADD_ALERT, REMOVE_ALERT, REMOVE_ALL_ALERTS } = alertSlice.actions;

export default alertSlice.reducer;
