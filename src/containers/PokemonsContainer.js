// @flow
import { connect } from 'react-redux';

import { fetchPokemons } from '../actions/api';
import type { State, Dispatch } from '../types/redux';
import Pokemons from '../components/Pokemons';

const mapStateToProps = (state: State) => {
  const pokemons = state.pokemons;
  return {
    pokemons
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { 
    handleMount: () => {
      // $FlowFixMe
      dispatch(fetchPokemons());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
