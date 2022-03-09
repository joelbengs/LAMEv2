import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album-service';

@Component({
  selector: 'app-view-album',
  templateUrl: './view-album.component.html',
  styleUrls: ['./view-album.component.css'],
  providers: [AlbumService]
})
export class ViewAlbumComponent implements OnInit {

  clientId: String = '9d4736d22394473c92fa72cebcd4f9d8';
  clientSecret: String = '0262845f4af74aaab6caebd7e4f03f84';
  albumID: String = "28enuddLPEA914scE6Drvk";

  constructor(private service: AlbumService) { }

  ngOnInit(): void {
  }

  async getAlbum() {
    let token = await this.service.getToken(this.clientId, this.clientSecret);
    let album = await this.service.getAlbum(token, this.albumID);
    console.dir(album);
  }

}
