import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  userRegister,
  userLogin,
  userLogout,
  fetchContacts,
  addContact,
  deleteContact,
  userCurrent,
} from '../api/fetch';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUserThunk = createAsyncThunk(
  'auth/registerUserThunk',
  async (user, thunkAPI) => {
    try {
      const response = await userRegister(user);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logInUserThunk = createAsyncThunk(
  'auth/logInUserThunk',
  async (user, thunkAPI) => {
    try {
      const response = await userLogin(user);
      token.set(response.data.token);
      console.log(response.status);
      if (response.status === 200) {
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const response = await userCurrent();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUserThunk = createAsyncThunk(
  'auth/logOutUserThunk',
  async (_, thunkAPI) => {
    try {
      await userLogout();
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contact, thunkAPI) => {
    try {
      const response = await addContact(contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async (event, thunkAPI) => {
    try {
      const response = await deleteContact(event);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
