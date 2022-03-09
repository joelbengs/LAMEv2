import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  name: string = "artistens namn/id";
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    }

  

}

