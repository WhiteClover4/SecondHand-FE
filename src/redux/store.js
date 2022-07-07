import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import alertReducer from './slice/alert';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
});
