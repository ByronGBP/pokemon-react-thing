import { combineReducers } from "redux";

import navBarReducer from "./path";
import { pokemonsReducer, pokemonReducer } from "./api";

const rootReducer = combineReducers({
  currentPath: navBarReducer,
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer
});

export default rootReducer;