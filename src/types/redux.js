//@flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { NavPathState, NavPathAction } from './navbar';

export type State = NavPathState;
export type Action = NavPathAction;

// Redux's Store has it own State and Action type.
// Let's create a Generic for our own State and Action type
// Same for Dispatch
export type Store = ReduxStore<State, Action>
export type Dispatch = ReduxDispatch<Action>;
