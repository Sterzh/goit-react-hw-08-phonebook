import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterStorageContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterStorageContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
