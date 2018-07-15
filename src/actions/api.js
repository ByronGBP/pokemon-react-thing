// @flow

import type { ApiRequestAction, ApiData } from '../types/api';
import type { Dispatch, Thunk, Action } from '../types/redux';

export const requestPokemons = (): ApiRequestAction => ({
  type: 'REQUEST_POKEMONS'
});

export const requestPokemon = (): ApiRequestAction => ({
  type: 'REQUEST_POKEMON'
});

export const recievePokemons = (json: any): ApiRequestAction => {
  return {
    type: 'RECEIVE_POKEMONS',
    data: json.records.map(elem => {
      const apiData: ApiData = { id: elem.id, fields: elem.fields }; 
      return apiData;
    })
  };
};

export const recievePokemon = (json: any): ApiRequestAction => {
  const apiData: ApiData = { id: json.id, fields: json.fields }; 

  return {
    type: 'RECEIVE_POKEMON',
    data: apiData
  };
};


export const fetchPokemons = () => {
  return (dispatch: Dispatch) => {
    dispatch(requestPokemons());
    return fetch(`https://api.airtable.com/v0/appnl9mr6g4BmsvnB/Pok%C3%A9mon?api_key=key7xTelHSO8v1AdI`)
      .then(response => response.json())
      .then(json => dispatch(recievePokemons(json)));
  };
};

export const fetchPokemon = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(requestPokemon());
    return fetch(`https://api.airtable.com/v0/appnl9mr6g4BmsvnB/Pok%C3%A9mon/${id}?api_key=key7xTelHSO8v1AdI`)
      .then(response => response.json())
      .then(json => dispatch(recievePokemon(json)));
  };
};