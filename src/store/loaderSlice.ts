import { createSlice } from '@reduxjs/toolkit';

export interface LoaderState {
  show: boolean;
}

const initialState: LoaderState = {
  show: false,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.show = true;
    },
    hiddeLoader: (state) => {
      state.show = false;
    },
  },
});

export const { showLoader, hiddeLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
