# Lund's Academic Music Ensycliopedia
Welcome to Lund's nr. 1 discography website!

Here you can discover the discography of artsts, using the spotify API. The website is built in Angular using Angular Materials for styling and NgRX for state management

![Welcome Screenshot](https://github.com/joelbengs/LAMEv2/blob/media/images/demo1.jpg?raw=true)

## Project Reflection
This website was created as a group project in the course web programing, EDAF90, at Lund University.

Our initial goal was to create a fairly simple but functional version of the Spotify app. The webpage
was supposed to include a search function, a discography view, a tracklist for the
selected album and a playlist where the viewer can add and remove tracks. The app uses the public
spotify API to attain information about artists, albums and tracks. We opted out of letting the user
sign in to spotify and instead used an access token generated from one of our accounts, to simplify.
We also thought of implementing a function that would allow the viewer to play the songs in the
playlist but as we progressed we realized that this was out of scope for the project. There are some minor
functionalities that did not turn out as expected, such as adaptive height on angular material
elements (now the tracklist and playlist can overflow their respective containers), and non-fatal
error messages in the console (often related to the API calls).

Apart from that, the functionality that we initially wanted was successfully implemented
