import { createAction, props } from '@ngrx/store';
import { Song } from '../models/song.model';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const custom = createAction('[Counter Component] Custom', props<{addon: Song}>());
