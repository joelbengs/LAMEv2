import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsComponent } from './albums/albums.component';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { StoreModule } from '@ngrx/store';
import { songReducer } from './state/song.reducer';
import { ViewAlbumComponent } from './view-album/view-album.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    MyCounterComponent,
    SearchBarComponent,
    ViewAlbumComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ song: songReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
