import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    delContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
    editContact(state, action) {
      console.log('Edit contact is done');
    },
  },
});

export const { addContact, delContact, editContact } = itemsSlice.actions;
