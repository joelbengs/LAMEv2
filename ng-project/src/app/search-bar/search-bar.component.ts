import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
searchString: String | undefined;
  constructor() {

   }

  ngOnInit(): void {
  }

  searchMusic() {
    console.log(this.searchString);
  }

}
