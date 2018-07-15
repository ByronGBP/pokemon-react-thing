// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPokemon } from '../actions/api';
import type { State, Dispatch } from '../types/redux';
import Pokemon from '../components/Pokemon';

const mapStateToProps = (state: State) => {
  const pokemon = state.pokemon;
  return {
    pokemon
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleMount: (id) => {
      // $FlowFixMe
      dispatch(fetchPokemon(id));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pokemon));
