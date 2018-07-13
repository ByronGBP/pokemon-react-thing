// @flow
// $FlowFixMe
import './styles/main';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import Root from './components/Root';

import reducers from './reducers/main';

import type { Store } from './types/redux';

const store: Store = createStore(reducers);

const container = document.getElementById('main-container');

if (!container) {
  throw new Error(`Container doesn't exist`);
}

render(
  <Provider store={store}>
    <Root />
  </ Provider>
  , container);
