import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const itemsSlice = createSlice({
  name: 'items',
  initialState: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
  reducers: {
    addContact(state, action) {
      console.log(state);
      state.push(action.payload);
    },
    delContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    editContact(state, action) {
      state = state.map(item => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
          item.number = action.payload.number;
        }
        return item;
      });
    },
  },
});

const persistConfig = {
  key: 'items',
  storage,
};

export const itemsReducer = persistReducer(persistConfig, itemsSlice.reducer);

export const { addContact, delContact, editContact } = itemsSlice.actions;
