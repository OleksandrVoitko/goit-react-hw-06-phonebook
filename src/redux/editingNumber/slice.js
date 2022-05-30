import { createSlice } from '@reduxjs/toolkit';

export const editingNumberSlice = createSlice({
  name: 'editingNumber',
  initialState: '',
  reducers: {
    setEditingNumber(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setEditingNumber } = editingNumberSlice.actions;
