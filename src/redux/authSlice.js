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
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.error = action.payload;
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

      .addCase(logOutUserThunk.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOutUserThunk.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
