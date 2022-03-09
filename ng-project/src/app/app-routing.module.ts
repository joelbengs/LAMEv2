import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
{path: 'albums/:id', 
component: AlbumsComponent},
{path: "search-bar",
component: SearchBarComponent}
]; //sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
