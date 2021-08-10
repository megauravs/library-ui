import React, {useContext} from 'react';

const BooksContext = React.createContext();

export const useBookContext = () => useContext(BooksContext); // the custom hook

export default BooksContext;