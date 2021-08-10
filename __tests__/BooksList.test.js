import React from 'react';
import { shallow, mount, render } from 'enzyme';
import BooksList from '../src/components/BooksList';
import Book from '../src/components/Book';
import * as BooksContext from '../src/context/BooksContext';

describe("<BooksList/>", () => {
    let books =[{
        "id": 1,
        "isbn": "12345",
        "name": "Harry Potter",
        "author": "J. K. Rowling",
        "quantity": 10,
        "price": 6.99,
        "date": "2021-08-09"
      },
      {
        "id": 2,
        "isbn": "7890",
        "name": "Extraction",
        "author": "Dr. Lilly Bhagwat",
        "quantity": 12,
        "price": 12.99,
        "date": "2021-07-12"
      }];

    it("render list of books if available", () => {
        const contextValues = {books: books};
        jest.spyOn(BooksContext, 'useBookContext')
			.mockImplementation(() => contextValues);

        const component = shallow(<BooksList />);
        expect(component.find('Book')).toHaveLength(2);
    });

    it("render empty list of books if not available", () => {
        books = [];
        const contextValues = {books: books};
        jest.spyOn(BooksContext, 'useBookContext')
			.mockImplementation(() => contextValues);

        const component = shallow(<BooksList />);
        expect(component.find('Book')).toHaveLength(0);
    });

    it("add book to the list when submitted", () => {
      const contextValues = {books: books};
      jest.spyOn(BooksContext, 'useBookContext')
    .mockImplementation(() => contextValues);

      const component = shallow(<BooksList />);
      expect(component.find('Book')).toHaveLength(0);
  });


});