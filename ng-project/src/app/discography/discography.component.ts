import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album-service';


@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css'],
  providers: [AlbumService]
})
export class DiscographyComponent implements OnInit {

  clientId: String = '9d4736d22394473c92fa72cebcd4f9d8';
  clientSecret: String = '0262845f4af74aaab6caebd7e4f03f84';
  artistId: String = "06HL4z0CvFAxyc27GXpf02";

  constructor(private service: AlbumService) { }

  ngOnInit(): void {
  }

  async getDiscography() {
    let token = await this.service.getToken(this.clientId, this.clientSecret);
    let discography = await this.service.getDiscography(token, this.artistId);
    //let album = await this.service.getAlbum(token, this.albumID);
    console.dir(discography);
  }

}
