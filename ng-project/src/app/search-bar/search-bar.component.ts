import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/search-service';
import { Artist } from '../models/artist';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [SpotifyService],
})

export class SearchBarComponent implements OnInit {

  searchStr = '';
  clientId = '9d4736d22394473c92fa72cebcd4f9d8';
  clientSecret = '0262845f4af74aaab6caebd7e4f03f84';
  myArtists: Array<Artist> = [];

  constructor(private service: SpotifyService) {
  }

  ngOnInit(): void {
    this.searchMusic();
  }

  async searchMusic() {
    this.myArtists = [];
    let token = await this.service.getToken(this.clientId, this.clientSecret);
    let artists = await this.service.getArtists(token, this.searchStr);

    artists.forEach(
      (element: any) => this.myArtists.push(new Artist(element.name, element.id))
    )
    }
  }
