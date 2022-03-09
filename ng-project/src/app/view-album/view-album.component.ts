import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album-service';
import { Song } from '../models/song.model';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.css'],
  providers: [AlbumService]
})
export class ViewAlbumComponent implements OnInit {


  clientId: String = '9d4736d22394473c92fa72cebcd4f9d8';
  clientSecret: String = '0262845f4af74aaab6caebd7e4f03f84';
  albumID: String = "5duyQokC4FMcWPYTV9Gpf9";
 
  artist: String;
  albumName: String;
  releaseDate: String;
  label: String;
  numberOfTracks: Number;
  tracks: Array<any>;
  images: Array<any>;

  constructor(private service: AlbumService) { 
    this.artist = "";
    this.albumName = "";
    this.releaseDate = "";
    this.label = "";
    this.numberOfTracks = 0;
    this.tracks = [];
    this.images = [];
  }

  ngOnInit(): void {
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

    //to be removed
    console.dir(this.tracks);
    console.dir(album);
  }

   durationCalc(duration: number) {
    let seconds = duration/1000
    let minutes = Math.floor(seconds/60)
    let secondsleft = Math.round(seconds - minutes * 60);
    return minutes + "." + secondsleft;
  } 
}
