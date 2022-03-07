import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './song.actions';
 
export const initialState = "myString";
 
const _songReducer = createReducer(
  initialState,
  on(increment, (state) => state + "increment"),
  on(decrement, (state) => state + "decrement"),
  on(reset, (state) => "reset")
);
 
export function songReducer(state: string | undefined, action: Action) {
  return _songReducer(state, action);
}