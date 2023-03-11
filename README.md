# Lund's Academic Music Ensycliopedia
Welcome to Lund's nr. 1 discography website!

Here you can discover the discography of artsts, using [Spotify's web API]/https://developer.spotify.com/documentation/web-api/). The website is built in Angular using Angular Materials for styling and NgRX for state management.

## Demo

On LAME, the user can search for an Artist available at Spotify's huge library of music.

![Welcome Screenshot](https://github.com/joelbengs/LAMEv2/blob/media/images/demo1.jpg?raw=true)

The system will suggests artists based on what the user start to type

![Search for an artist](https://github.com/joelbengs/LAMEv2/blob/media/images/demo2.jpg?raw=true)


When selecting an artist, the discography of that artist is presented.


![Discography1](https://github.com/joelbengs/LAMEv2/blob/media/images/demo3.jpg?raw=true)


Find some more artists of your liking!


![Discography2](https://github.com/joelbengs/LAMEv2/blob/media/images/demo4.jpg?raw=true)

![Discography3](https://github.com/joelbengs/LAMEv2/blob/media/images/demo5.jpg?raw=true)

Press any album to view its details. Any song can be added to the users playlist.

<div style="margin: auto; display:flex;">
    <img src="https://github.com/joelbengs/LAMEv2/blob/media/images/demo6.jpg?raw=true" style="width:41%;" alt="Album1">
    <img src="https://github.com/joelbengs/LAMEv2/blob/media/images/demo7.jpg?raw=true" style="width:40%;" alt="Album2">
</div>

Browse your favorite artists and build your own customized playlist!

![Playlist](https://github.com/joelbengs/LAMEv2/blob/media/images/demo8.jpg?raw=true)

## How to get started
1. Clone the GitHub repository of the Angular project to the local machine.
2. Install Node.js and npm on the local machine if they are not already installed as they are required to run an Angular project.
3. Navigate to the folder with the 'cd' command in a CMD. Install the dependencies required by executing 'npm intsall'.
4. Start the local server by executing 'ng serve'. The server is now listening at http://localhost:4200/.
5. Visit http://localhost:4200/ and go discover some new artists!

## Backend design
The state management of this project was implemented using [NgRx](https://ngrx.io/), a store that provides reactive state management for Angular apps inspired by Redux. Below is an outline for how the this was done

![State management](https://github.com/joelbengs/LAMEv2/blob/media/images/NGRX_state_management.jpg?raw=true)

## Project Reflection
This website was created as a group project in the course web programing, EDAF90, at Lund University. None of the four group members had any prior experience with Angular. The contributing group members were, in no particular order: Ashley Lu, Ludvig Thornberg, Hendrik Shadman & Joel Bengs.

### Time budget

The project was completed under the budgeted time of 160 hours (40h/student).

<div style="margin: auto; display:flex;">
    <img src="https://github.com/joelbengs/LAMEv2/blob/media/images/timelog.jpg?raw=true" style="width:60%;" alt="budget">
</div>

### Outcome

Our initial goal was to create a fairly simple but functional version of the Spotify app, with focus on backend functionality. The webpage
was supposed to include a search function, a discography view, a tracklist for the
selected album and a playlist where the viewer can add and remove tracks. The app uses the public
spotify API to attain information about artists, albums and tracks. We opted out of letting the user
sign in to spotify and instead used an access token generated from one of our accounts, to simplify.
We also thought of implementing a function that would allow the viewer to play the songs in the
playlist but as we progressed we realized that this was out of scope for the project. There are some minor
functionalities that did not turn out as expected, such as adaptive height on angular material
elements (now the tracklist and playlist can overflow their respective containers), and several non-fatal
error messages in the console (often related to the API calls).

Apart from the above mentioned flaws, the functionality that we initially wanted was successfully implemented.

