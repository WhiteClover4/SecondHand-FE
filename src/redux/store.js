import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slice/profile';
import authReducer from './slice/auth';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
  },
});
