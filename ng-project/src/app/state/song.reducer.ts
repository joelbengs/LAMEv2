import { Action, createReducer, on, props } from '@ngrx/store';
import * as myActions from './song.actions';
import { Song } from '../models/song.model';
 
//intial state has the type ReadonlyArray<Song> and is an empty array, that only accepts songs as input
export const initialState: Array<Song> = [];
 
const _songReducer = createReducer(
  initialState,
  on(myActions.increment, (state) => state),
  on(myActions.decrement, (state) => state),
  on(myActions.reset, (state) => []),
  on(myActions.custom, (state, action) => [...state, action.addon])
);
 
export function songReducer(state: Array<Song> | undefined, action: Action) {
  return _songReducer(state, action);
}