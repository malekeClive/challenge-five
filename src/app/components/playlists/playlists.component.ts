import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/playlist';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlist[] = [];
  modalShowed: boolean = false;

  constructor(private playlistsService: PlaylistService) { }

  ngOnInit(): void {
    this.playlists = this.playlistsService.playlists;
  }

  setModal(showModal:boolean):void {
    this.modalShowed = showModal;
  }

  deletePlaylist(name: string): void {
    // remove list in this class
    this.playlists = this.playlists.filter(playlist => playlist.name != name);

    // remove list from source
    this.playlistsService.removePlaylist(name);
  }
}
