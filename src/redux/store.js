import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { itemsReducer } from './items/slice';
import { filterSlice } from './filter/slice';
import { editSlice } from './edit/slice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    filter: filterSlice.reducer,
    edit: editSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
