// @flow

export type ApiData = {
  id: string,
  fields: any,
  isFetching?: boolean
}
export type FecthData = {
  isFetching: boolean,
  items: Array<ApiData>
}

export type ApiState = {
  +pokemons: FecthData,
  +pokemon: ApiData
};

export type ApiRequestAction = 
  | { type: 'REQUEST_POKEMONS' }
  | { type: 'REQUEST_POKEMON' }
  | { type: 'RECEIVE_POKEMONS', +data: Array<ApiData> }
  | { type: 'RECEIVE_POKEMON', +data: ApiData }