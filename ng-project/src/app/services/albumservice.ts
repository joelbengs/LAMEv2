import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/oprator/map"

@Injectable()
export class  Service{

    constructor(private _http:HttpClient, private searchUrl: String){

    }

    searchMusic(str: string, type="artist"){
        let artist =  "kanye";
        this.searchUrl = "https://api.spotify.com/v1/search?q=" + "include_groups=album" + artist;

         let response = this._http.get(this.searchUrl + "&type=artist");
        
         console.log(response)
    }

    

}
