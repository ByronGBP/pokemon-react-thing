//@flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { NavPathState, NavPathAction } from './navbar';
import type { ApiState, ApiRequestAction } from './api';

export type State = NavPathState & ApiState;
export type GetState = () => Object;
export type Thunk<A> = (dispatch: Dispatch, getState: GetState) => any;
export type Action = NavPathAction | ApiRequestAction;

// Redux's Store has it own State and Action type.
// Let's create a Generic for our own State and Action type
// Same for Dispatch
export type Store = ReduxStore<State, Action>
// Don't understand why this works.
export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;
