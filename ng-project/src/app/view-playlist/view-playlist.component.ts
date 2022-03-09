import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';
import * as Actions from '../state/song.actions';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit {
  
  playlist$: Observable<Array<Song>>;

  constructor(private store: Store<{ playlist: Array<Song> }>) { 
    //subscribes the local variable "playlist$" to the global storage "playlist" (an observable)
    this.playlist$ = store.select('playlist');
  }
   
  reset() {
    this.store.dispatch(Actions.reset());
  }

  removeSong(songToRemove: Song) {
    this.store.dispatch(Actions.removeSong({songToRemove: songToRemove}));
  }

  ngOnInit(): void {
  }

}
