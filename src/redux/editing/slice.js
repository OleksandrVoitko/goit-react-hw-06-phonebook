import { createSlice } from '@reduxjs/toolkit';

export const editingSlice = createSlice({
  name: 'editing',
  initialState: false,
  reducers: {
    editing(state, action) {
      return (state = action.payload);
    },
  },
});

export const { editing } = editingSlice.actions;
