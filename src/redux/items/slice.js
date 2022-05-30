import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

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
      // const id = useSelector(state => state.editingID);
      console.log('Edit contact is done');
      // console.log(`Save edited contact. ID:${id}`);
    },
  },
});

export const { addContact, delContact, editContact } = itemsSlice.actions;
