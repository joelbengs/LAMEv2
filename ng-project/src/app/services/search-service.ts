import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { resultMemoize } from "@ngrx/store";

@Injectable()
export class SpotifyService {
    constructor() {

    }   
    getToken = async (clientId: String, clientSecret: String) => {
        let result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        }); 

        let data = await result.json();
        return data.access_token;
    }
    
    getArtists = async (token: any, searchStr: any) => {
        let result = await fetch("https://api.spotify.com/v1/search?q=" + searchStr + "&type=artist&limit=5", {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await result.json();
        data.artists.items.map((data: any) => console.log(data.name));
        return data.artists.items;
    }

    searchMusic(searchStr: any) {

        let clientId = '';
        let clientSecret = '';

        //let artist = "kayne";
        //let searchUrl = "https://api.spotify.com/v1/search?q=" + "include_groups=album" + artist;
        //let artists = this.http.get("https://api.spotify.com/v1/search?q=" + artist + "&type=artist");
        //console.log(artists);
        //let response = this._http.get(searchUrl + "&type=artist");
        console.log(searchStr);
    }
}