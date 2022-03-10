import { Injectable } from "@angular/core";

@Injectable()
export class DiscographyService {
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

        getDiscography = async (token: any, artistID: any) =>{
          let result = await fetch("https://api.spotify.com/v1/artists/" + artistID + "/albums?limit=20", {
            method: 'GET',
            headers: {
              'Content-Type' : 'application/json',
              'Authorization':'Bearer ' + token
            }
          });
          const data = await result.json();
          return data;
        }

    }
