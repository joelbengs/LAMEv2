import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsComponent } from './albums/albums.component';

import { MyCounterComponent } from './my-counter/my-counter.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,

    MyCounterComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
