import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscographyService } from '../services/discography-service';
import { Album } from '../models/album.model';


@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css'],
  providers: [DiscographyService]
})

export class DiscographyComponent implements OnInit {

  clientId: string = '9d4736d22394473c92fa72cebcd4f9d8';
  clientSecret: string = '0262845f4af74aaab6caebd7e4f03f84';
  artistId: string = "";
  myDiscography: Array<Album> = [];

  constructor(private service: DiscographyService, private router: ActivatedRoute ) {
    
  }

  ngOnInit(): void {
    this.artistId = this.router.snapshot.params['id'];
    console.log(this.artistId)
    this.getDiscography()
  }

  async getDiscography() {
    let token = await this.service.getToken(this.clientId, this.clientSecret);
    let discography = await this.service.getDiscography(token, this.artistId);
    let discAlbums = discography.items;
    discAlbums.forEach((e: any) => this.myDiscography.push(
      new Album(
        e.name,
        e.artists[0].name,
        e.id,
        e.images[1].url,
        e.release_date)
    ))
    console.dir(this.myDiscography);
    }

}
