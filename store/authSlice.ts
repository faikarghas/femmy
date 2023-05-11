import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

// Type for our state
export interface AuthState {
  authState: boolean;
  id: any;
  role: any;
}

// Initial state
const initialState: AuthState = {
  authState: false,
  id: 0,
  role: 3
};

// Actual Slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setAuthId(state, action) {
      state.id = action.payload;
    },
    setAuthRole(state, action) {
      state.role = action.payload;
    },
  },
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState, setAuthId, setAuthRole } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;

export default authSlice.reducer;
