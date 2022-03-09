import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-view-playlist',
  templateUrl: './view-playlist.component.html',
  styleUrls: ['./view-playlist.component.css']
})
export class ViewPlaylistComponent implements OnInit {
  
  playlist$: Observable<Array<Song>>;
  constructor(private store: Store<{ playlist: Array<Song> }>) { 
    this.playlist$ = store.select('playlist');
  }

  ngOnInit(): void {
  }

}
