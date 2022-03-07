import { Action, createReducer, on, props } from '@ngrx/store';
import * as myActions from './song.actions';
import { Song } from '../models/song.model';
 
//intial state has the type ReadonlyArray<Song> and is an empty array, that only accepts songs as input
export const initialState: Array<Song> = [];
 
const _songReducer = createReducer(
  initialState,
  on(myActions.reset, (state) => []),
  on(myActions.addSong, (state, action) => [...state, action.songToAdd]),
  on(myActions.removeSong, (state, action) => {
    let stateCopy = [...state];
    const index =  stateCopy.map(e => e.track).indexOf(action.songToRemove.track, 0);
    if (index > -1) {
       stateCopy.splice(index, 1);
      }
    return stateCopy;
    } 
  )
);
 
export function songReducer(state: Array<Song> | undefined, action: Action) {
  return _songReducer(state, action);
}