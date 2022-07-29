import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, addBookThunk } from '../redux/books/books';

function AddBook() {
  const initialInputs = {
    author: '',
    title: '',
    category: '',
    id: uuidv4(),
  };

  const [values, setValues] = React.useState(initialInputs);

  const changeAuthor = (e) => {
    const newValue = {
      ...values,
      author: e.target.value,
    };
    setValues(newValue);
  };

  const changeTitle = (e) => {
    const newValue = {
      ...values,
      title: e.target.value,
    };
    setValues(newValue);
  };

  const changeCategory = (e) => {
    const newValue = {
      ...values,
      category: e.target.value,
    };
    setValues(newValue);
  };

  const add = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    add(addBook(values));
    add(addBookThunk(values));
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h2>Add new Book</h2>
      <form onSubmit={handleClick}>
        <input
          type="text"
          className="add-book"
          placeholder="Add Book"
          onChange={changeTitle}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={changeAuthor}
          required
        />
        <input
          type="text"
          placeholder="Category"
          onChange={changeCategory}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
