import React from 'react';
import AppRouter from '../src/router/AppRouter';
import { shallow, mount, render } from 'enzyme';
import {
    MemoryRouter
} from 'react-router'
import { Route } from 'react-router-dom';
import BooksList from '../src/components/BooksList';
import AddBook from '../src/components/AddBook';
import EditBook from '../src/components/EditBook';

let pathMap = {};
describe("<AppRouter/>", () => {
    beforeAll(() => {
        const component = shallow(<AppRouter />);
        pathMap = component.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
    });

    it('should show Home component for / router (getting array of routes)', () => {
        expect(pathMap['/']).toBe(BooksList);
    })

    it('should show Add Book Form component for /add router', () => {
        expect(pathMap['/add']).toBe(AddBook);
    })

    it('should show Edit Book modal for /edit/{id} router', () => {
        expect(pathMap['/edit/:id']).toBe(EditBook);
    })

});