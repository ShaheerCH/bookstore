import React from 'react';
import Book from './Book';
import AddBook from './Addbook';

class BookList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          title: 'Dairy of a Wimpy Kid',
          author: 'Wimpy Kid',
          id: 1,
        },
        {
          title: 'Lord of The Rings',
          author: 'J R R Tolkien',
          id: 2,
        },
        {
          title: 'Harry Potter',
          author: 'J K Rowling',
          id: 3,
        },
      ],
    };
  }

  render = () => {
    const { books } = this.state;
    return (
      <div>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
        <AddBook />
      </div>
    );
  };
}

export default BookList;
