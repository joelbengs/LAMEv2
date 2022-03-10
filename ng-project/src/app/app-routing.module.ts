import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DiscographyComponent } from './discography/discography.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';

const routes: Routes = [
{path: "view-playlist",
component: ViewPlaylistComponent},
{path: "view-album/:id", 
component: ViewAlbumComponent},
{path: 'discography/:id', 
component: DiscographyComponent},
{path: "search-bar",
component: SearchBarComponent}

]; //sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
