import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import pretty from 'pretty';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AllSports from '../components/homepage';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('testing the app', () => {
  it('testing details page', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <AllSports />
          </Provider>
        </BrowserRouter>, container,
      );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
