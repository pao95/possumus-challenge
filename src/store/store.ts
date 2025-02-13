import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from './loaderSlice';

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
