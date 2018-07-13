// @flow

import type { NavPath } from '../types/navbar';
import type { Action } from '../types/redux';

const navPathReducer = (state: NavPath = '', action: Action): NavPath => {
  switch (action.type) {
  case 'SET_NAVPATH':
    return action.currentPath;
  default:
    return state;
  }
};

export default navPathReducer;
