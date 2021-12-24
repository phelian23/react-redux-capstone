import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AllSports from '../components/allSports';

describe('Test Homepage', () => {
  test('display', () => {
    render(<Provider store={store}><Router><AllSports /></Router></Provider>);
    const display = screen.getByRole('heading');
    expect(display.textContent).toBe('Pick a Category');
  });
});
