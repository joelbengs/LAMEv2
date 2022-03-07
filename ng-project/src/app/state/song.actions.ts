import { createAction, props } from '@ngrx/store';
import { Song } from '../models/song.model';

export const reset = createAction('[Counter Component] reset');
export const removeSong = createAction('[Counter Component] removeSong', props<{songToRemove: Song}>());
export const addSong = createAction('[Counter Component] addSong', props<{songToAdd: Song}>());
