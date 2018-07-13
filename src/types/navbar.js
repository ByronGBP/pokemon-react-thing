// @flow

export type NavPath = 'pokemons' | 'moves' | 'types' | 'colors' | '';

export type NavPathState = {
  +currentPath: NavPath
};

export type NavPathAction = {
  type: 'SET_NAVPATH',
  +currentPath: NavPath
};
