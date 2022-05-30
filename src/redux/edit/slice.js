import { createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
  name: 'edit',
  initialState: {
    isEditing: false,
    editingID: '',
    editingName: '',
    editingNumber: '',
  },
  reducers: {
    editing(state, action) {
      state.isEditing = action.payload;
    },
    setEditingID(state, action) {
      state.editingID = action.payload;
    },
    setEditingName(state, action) {
      state.editingName = action.payload;
    },
    setEditingNumber(state, action) {
      state.editingNumber = action.payload;
    },
  },
});

export const { editing, setEditingID, setEditingName, setEditingNumber } =
  editSlice.actions;
