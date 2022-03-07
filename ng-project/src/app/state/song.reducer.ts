import { Action, createReducer, on, props } from '@ngrx/store';
import * as myActions from './song.actions';
 
export const initialState = "myString";
 
const _songReducer = createReducer(
  initialState,
  on(myActions.increment, (state) => state + "increment"),
  on(myActions.decrement, (state) => state + "decrement"),
  on(myActions.reset, (state) => "reset"),
  on(myActions.custom, (state, action) => action.addon )
);
 
export function songReducer(state: string | undefined, action: Action) {
  return _songReducer(state, action);
}