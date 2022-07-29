import { configureStore } from '@reduxjs/toolkit';
import checkReducer from './categories/categories';
import addRemoveReducer from './books/books';

const store = configureStore({
  reducer: {
    checkStatus: checkReducer,
    books: addRemoveReducer,
  },
});

export default store;
