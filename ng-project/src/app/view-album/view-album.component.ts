import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album-service';
import { Song } from '../models/song.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as Action from '../state/song.actions'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.css'],
  providers: [AlbumService]
})
export class ViewAlbumComponent implements OnInit {

  //Storage
  playlist$: Observable<Array<Song>>;

  //Access and albumID
  clientId: String = '9d4736d22394473c92fa72cebcd4f9d8';
  clientSecret: String = '0262845f4af74aaab6caebd7e4f03f84';
  albumID: String = "5duyQokC4FMcWPYTV9Gpf9";
 
  //Local varaibles for viewing in html
  artist: string;
  albumName: string;
  releaseDate: string;
  label: string;
  numberOfTracks: Number;
  tracks: Array<any>;
  images: Array<any>;

  constructor(
    private service: AlbumService, 
    private store: Store<{ playlist: Array<Song> }>,
    private router: ActivatedRoute
    ) { 
    //subscribes the local variable "playlist$" to the global storage "playlist" (an observable)
    this.playlist$ = store.select('playlist');

    this.artist = "";
    this.albumName = "";
    this.releaseDate = "";
    this.label = "";
    this.numberOfTracks = 0;
    this.tracks = [];
    this.images = [];
    
  }

  ngOnInit(): void {
    this.albumID = this.router.snapshot.params["id"];
    this.getAlbum();
  }

  addSong(songToAdd: Song) {
    this.store.dispatch(Action.addSong({songToAdd: songToAdd}));
    alert("Song added to your playlist!");
  }

  removeSong(songToRemove: Song) {
    this.store.dispatch(Action.removeSong({songToRemove: songToRemove}));
  }

  async getAlbum() {
    let token = await this.service.getToken(this.clientId, this.clientSecret);
    let album = await this.service.getAlbum(token, this.albumID);
    this.artist = album.artists[0].name;
    this.albumName = album.name;
    this.releaseDate = album.release_date;
    this.numberOfTracks = album.total_tracks;
    this.label = album.label;
    this.tracks = album.tracks.items;
    this.images = album.images;
    console.dir(album);
  }

  //To be removed or worked on. ALSO REMOVE THE BUTTON IN HTML
  added(song: Song) {
 /*    const index = this.playlist$.map(e => e.track).indexOf(song.track, 0);
    if (index > -1) {
      return true;
    }
    return false; */
  }

   durationCalc(duration: number) {
    let seconds = duration/1000
    let minutes = Math.floor(seconds/60)
    let secondsleft = Math.round(seconds - minutes * 60);
    if (secondsleft < 10) {
      return minutes + "." + 0 + secondsleft;
    }
    return minutes + "." + secondsleft;
  }  
}
