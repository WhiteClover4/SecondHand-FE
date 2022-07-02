import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth';
import alertReducer from './slice/alert';
import productReducer from './slice/product';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
