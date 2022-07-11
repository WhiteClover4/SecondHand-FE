import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import alertReducer from './slice/alert';
import sideNavbarReducer from './slice/sideNavbar';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    sideNavbar: sideNavbarReducer,
  },
});
