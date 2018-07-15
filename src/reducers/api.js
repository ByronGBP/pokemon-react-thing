// @flow
import type { FecthData, ApiRequestAction, ApiData } from '../types/api';

const defaultSatePokemons: FecthData = {
  isFetching: false,
  items: []
};

const defaultSatePokemon: ApiData = {
  id: '',
  isFetching: false,
  fields: {}
};

export const pokemonsReducer = (state: FecthData = defaultSatePokemons, action: ApiRequestAction): FecthData => {
  switch (action.type) {
  case 'REQUEST_POKEMONS':
    return {
      ...state,
      isFetching: true
    };
  case 'RECEIVE_POKEMONS':
    return {
      ...state,
      isFetching: false,
      items: action.data
    };
  default:
    return state;
  }
};

export const pokemonReducer = (state: ApiData = defaultSatePokemon, action: ApiRequestAction): ApiData => {
  switch (action.type) {
  case 'REQUEST_POKEMON':
    return {
      ...state,
      isFetching: true
    };
  case 'RECEIVE_POKEMON':
    return {
      ...state,
      isFetching: false,
      ...action.data
    };
  default:
    return state;
  }
};
