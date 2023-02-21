import { configureStore } from '@reduxjs/toolkit';
import { pokemonsSlice } from './pokemon-slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { toDosApi } from './toDos-api';
export const store = configureStore({
  reducer: {
    [pokemonsSlice.name]: pokemonsSlice.reducer,
    [toDosApi.reducerPath]: toDosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(toDosApi.middleware),
});

setupListeners(store.dispatch);
