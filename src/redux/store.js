import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slice/profile';
import authReducer from './slice/auth';
import alertReducer from './slice/alert';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
    alert: alertReducer,
  },
});
