import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

// Type for our state
export interface ModalState {
  modalLoginState: boolean;
  modalRegisterState: boolean;

}

// Initial state
const initialState: ModalState = {
  modalLoginState: false,
  modalRegisterState: false,
};

// Actual Slice
export const modalSlice= createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalState(state, action) {
      state.modalLoginState = action.payload;
    },
    setModalRegisterState(state, action) {
      state.modalRegisterState = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.modal,
      };
    },
  },
});

export const { setModalState } = modalSlice.actions;
export const { setModalRegisterState } = modalSlice.actions;

export const selectModalState = (state: AppState) => state.modal.modalLoginState;
export const selectModalRegState = (state: AppState) => state.modal.modalRegisterState;

export default modalSlice.reducer;
