import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Book from './Book';
import AddBook from './Addbook';
import { loadBookThunk } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);

  const load = useDispatch();

  useEffect(() => {
    load(loadBookThunk());
  }, [load]);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          id={book.id}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
