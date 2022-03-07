import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';
import * as Actions from '../state/song.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  song$: Observable<Array<Song>>;
 
  constructor(private store: Store<{ song: Array<Song> }>) {
    this.song$ = store.select('song');
  }
 
  reset() {
    this.store.dispatch(Actions.reset());
  }
 
  removeSong(songToRemove: Song) {
    this.store.dispatch(Actions.removeSong({songToRemove: songToRemove}));
  }

  // Dispatch sends to the reducer. The custom action creator receives an object of addon and returns a plain JavaScript object with a type property (defined as a string in song.actions.ts), with addon as additional property.
  addSong(songToAdd: Song) {
    this.store.dispatch(Actions.addSong({songToAdd: songToAdd}));
  }

  ngOnInit(): void {
  }

}
