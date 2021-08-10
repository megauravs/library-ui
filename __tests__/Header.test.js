import React from 'react';
import Header from '../src/components/Header';
import { shallow, mount, render } from 'enzyme';

describe("<Header/>", () => {
    const header = shallow(<Header />);
    describe("Title", () => {
        it("renders title", () => {
            const title = header.find('h1');
            expect(title.html()).toContain("Library Book Management");
        });
    })
    describe("NavLink", () => {
        it("Add Book", () => {
            const addBook = header.find('[id="add"]');
            expect(addBook.props().to).toBe('/add');
        });
        
        it("List Books", () => {
            const listBook = header.find('[id="list"]');
            expect(listBook.props().to).toBe('/');
        });
    })
});