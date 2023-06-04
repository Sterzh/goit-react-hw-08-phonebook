import { createSlice } from '@reduxjs/toolkit';
import {
  registerUserThunk,
  logInUserThunk,
  logOutUserThunk,
  fetchCurrentUser,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, (state, action) => {
        // state.isLoading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        // state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logInUserThunk.pending, (state, action) => {
        // state.isLoading = true;
      })
      .addCase(logInUserThunk.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUserThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOutUserThunk.pending, (state, action) => {
        // state.isLoading = true;
      })
      .addCase(logOutUserThunk.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutUserThunk.rejected, (state, action) => {
        // state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.pending, (state, action) => {
        // state.isLoading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        // state.isLoading = false;
        // state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
