import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Playlist } from 'src/app/models/playlist';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  clickEventSubscription: Subscription;
  playlists: Playlist[] = [];
  showModal: boolean = false;

  constructor(private playlistsService: PlaylistService) {
    this.clickEventSubscription = this.playlistsService.getClickEvent().subscribe(() => {
      this.playlists = this.playlistsService.playlists;
    });
  }

  ngOnInit(): void {
    this.playlists = this.playlistsService.playlists;
  }

  setModal(showModal: boolean): void {
    this.showModal = showModal;
  }

  deletePlaylist(idx: number): void {
    // remove list in this class
    this.playlists = this.playlists.filter((_, i) => idx != i);

    // remove list from source
    this.playlistsService.removePlaylist(idx);
  }
}
