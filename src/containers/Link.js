// @flow

import { connect } from 'react-redux';
import { setNavPath } from '../actions/navbar';

import NavLink from '../components/NavLink';

import type { State, Dispatch } from '../types/redux';
import type { NavPath } from '../types/navbar';

type OwnProps = {
  path: NavPath,
  location: NavPath
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  return {
    active: state.currentPath === ownProps.path
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
  return {
    handleClick: () => {
      dispatch(setNavPath(ownProps.path));
    },
    handleMount: () => {
      dispatch(setNavPath(ownProps.location));
    }
  };
};


const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(NavLink);
