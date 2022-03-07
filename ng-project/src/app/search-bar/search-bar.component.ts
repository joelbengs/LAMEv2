import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/search-service';


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
  artists = [""]
  constructor(private service: SpotifyService) {
    
  }

  ngOnInit(): void {
    
  }

  async searchMusic() {
    let token = await this.service.getToken(this.clientId, this.clientSecret);
    this.artists = await this.service.getArtists(token, this.searchStr);
    
    this.service.searchMusic(this.searchStr);
    }
}
