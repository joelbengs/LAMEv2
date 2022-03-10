import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/search-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [SpotifyService]
})

export class SearchBarComponent implements OnInit {

  searchStr = '';
  clientId = '9d4736d22394473c92fa72cebcd4f9d8';
  clientSecret = '0262845f4af74aaab6caebd7e4f03f84';
  artists: any = [];
  artistName: any = [];
  name: string = "hej";

  constructor(private service: SpotifyService) {
  }

  ngOnInit(): void {
  }

  async searchMusic() {
    let token = await this.service.getToken(this.clientId, this.clientSecret);
    this.artists = await this.service.getArtists(token, this.searchStr);
    this.artistName = this.artists.map((artist: any) => artist.name );
    this.service.searchMusic(this.searchStr);
    }
}
