import AppRouter from '../src/router/AppRouter';
import React from 'react';
import { mount } from 'enzyme';

test('TodoComponent renders the text inside it', () => {
    const wrapper = mount(
      <AppRouter />
    );
    expect(wrapper).toMatchSnapshot();
  });