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

  albumIds: String[];

//For future
  //artistId = (someservice).getArtistID();

  constructor(private service: AlbumService) {
    this.albumIds = [];
   }

  ngOnInit(): void {
  }

  async getDiscography() {

    let token = await this.service.getToken(this.clientId, this.clientSecret);
    let discography = await this.service.getDiscography(token, this.artistId);
    //Get album ids and store them in albumIds array
    for(var i = 0; i<discography.items.length; i++){
    this.albumIds[i] = discography.items[i].id;
  }
  //this.albumIds.forEach( element => console.log(element));
  console.dir(discography);
  return this.albumIds;
}

}
