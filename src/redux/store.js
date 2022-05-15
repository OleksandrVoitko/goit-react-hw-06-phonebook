import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

export const addContact = createAction('items/addContact');
export const delContact = createAction('items/deleteContact');
export const addFilter = createAction('filter/addFilter');

const itemsReducer = createReducer([], {
  [addContact]: (state, action) => void state.push(action.payload),
  [delContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});
const filterReducer = createReducer('', {
  [addFilter]: (state, action) => {
    if (state) {
      state = '';
      return state + action.payload;
    }
    return state + action.payload;
  },
});

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterReducer,
  },
});
