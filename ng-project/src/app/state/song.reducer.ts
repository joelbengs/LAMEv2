import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './song.actions';
 
export const initialState = 0;
 
const _songReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);
 
export function songReducer(state: number | undefined, action: Action) {
  return _songReducer(state, action);
}