import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { CreatePlaylistComponent } from './components/create-playlist/create-playlist.component';
import { EditPlaylistComponent } from './components/edit-playlist/edit-playlist.component';
import { SongComponent } from './components/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
