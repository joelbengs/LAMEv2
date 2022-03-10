import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DiscographyComponent } from './discography/discography.component';

const routes: Routes = [
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
