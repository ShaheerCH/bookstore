import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LOAD_API = 'bookstore/books/LOAD_API';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KEQ8gCUWfeCzbcdDc3lZ/';
const initialState = [];

const addRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.book.id)];
    case LOAD_API:
      return [...state, ...action.bookList];
    default:
      return state;
  }
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const loadAPI = (bookList) => ({
  type: LOAD_API,
  bookList,
});

export const loadBookThunk = () => (dispatch) => fetch(`${baseURL}books`)
  .then((response) => response.json())
  .then((data) => {
    dispatch(
      loadAPI(
        Object.keys(data).map((key) => ({
          ...data[key][0],
          id: key,
        })),
      ),
    );
  });

export const addBookThunk = createAsyncThunk(ADD_BOOK, async (book) => {
  const inputs = {
    method: 'POST',
    body: JSON.stringify({
      item_id: book.id,
      author: book.author,
      category: book.category,
      title: book.title,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  await fetch(`${baseURL}books`, inputs);
  return book;
});

export const removeBookThunk = createAsyncThunk(REMOVE_BOOK, async (id) => {
  const param = {
    method: 'DELETE',
  };
  fetch(`${baseURL}books/${id}`, param);
});

export default addRemoveReducer;
