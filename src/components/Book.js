/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { CgSpinner } from 'react-icons/cg';
import { removeBook, removeBookThunk } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, category, id,
  } = props;
  const books = useSelector((state) => state.books);
  const del = useDispatch();
  const handleClick = () => {
    del(removeBook(books.find((book) => book.title === title)));
    del(removeBook(books.find((book) => book.id === id)));
    del(removeBookThunk(id));
  };
  return (
    <div className="book">
      <div className="book-info">
        <p className="category">{category}</p>
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
        <div className="modify">
          <p>Comments</p>
          <p className="remove" onClick={handleClick}>
            Remove
          </p>
          <p>Edit</p>
        </div>
      </div>
      <div className="progress">
        <CgSpinner className="spinner" />
        <div>
          <p className="progress-info">
            <span className="percentage">27%</span>
            <span className="completed">completed</span>
          </p>
        </div>
      </div>
      <div className="remove-div">
        <p className="chapter">CURRENT CHAPTER</p>
        <p>CHAPTER 2</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
