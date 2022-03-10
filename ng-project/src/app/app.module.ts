import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscographyComponent } from './discography/discography.component';
import { ViewAlbumComponent } from './view-album/view-album.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';

import { StoreModule } from '@ngrx/store';
import { songReducer } from './state/song.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DiscographyComponent,
    ViewAlbumComponent,
    ViewPlaylistComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    StoreModule.forRoot({ playlist: songReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
