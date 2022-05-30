import { createSlice } from '@reduxjs/toolkit';

export const editingIDSlice = createSlice({
  name: 'editingID',
  initialState: '',
  reducers: {
    setEditingID(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setEditingID } = editingIDSlice.actions;
