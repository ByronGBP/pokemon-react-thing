// @flow
// $FlowFixMe
import './styles/main';
// $FlowFixMe
import thunk from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import Root from './components/Root';

import reducers from './reducers/main';

import type { Store } from './types/redux';

const store: Store = createStore(reducers, applyMiddleware(thunk));

const loggerListener = () => {
  console.log(store.getState());
};
const unsubscribe = store.subscribe(loggerListener);

const container = document.getElementById('main-container');

if (!container) {
  throw new Error(`Container doesn't exist`);
}

render(
  <Provider store={store}>
    <Root />
  </ Provider>
  , container);
