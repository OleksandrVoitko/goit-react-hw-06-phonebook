import { configureStore } from '@reduxjs/toolkit';

import { itemsSlice } from './items/slice';
import { filterSlice } from './filter/slice';
import { editingSlice } from './editing/slice';
import { editingIDSlice } from './editingID/slice';
import { editingNameSlice } from './editingName/slice';
import { editingNumberSlice } from './editingNumber/slice';

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    filter: filterSlice.reducer,
    isEditing: editingSlice.reducer,
    editingID: editingIDSlice.reducer,
    editingName: editingNameSlice.reducer,
    editingNumber: editingNumberSlice.reducer,
  },
});
