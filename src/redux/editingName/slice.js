import { createSlice } from '@reduxjs/toolkit';

export const editingNameSlice = createSlice({
  name: 'editingName',
  initialState: '',
  reducers: {
    setEditingName(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setEditingName } = editingNameSlice.actions;
