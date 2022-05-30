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

export const { addContact, delContact, editContact } = itemsSlice.actions;
