// @flow

import type { NavPath, NavPathAction } from '../types/navbar';

export const setNavPath = (path: NavPath): NavPathAction => {
  return {
    type: 'SET_NAVPATH',
    currentPath: path
  };
};
