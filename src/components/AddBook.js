import React, { useContext } from 'react';
import axios from 'axios';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST"
  }
};

const AddBook = ({ history }) => {
  const { books, setBooks } = useContext(BooksContext);

  const handleOnSubmit = (book) => {
    axios.post('http://localhost:8080/api/v1/book', book, {
      headers: config.headers
    })
      .then(response => {
        console.log('Book has been added successfully!', response);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    setBooks([book, ...books]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;