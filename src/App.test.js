import React from 'react';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

/* global it, expect */

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});