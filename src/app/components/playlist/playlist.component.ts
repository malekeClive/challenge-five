import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/models/playlist';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  @Input() playlist!: Playlist;
  @Input() idx!: number;
  @Output() deletePlaylist = new EventEmitter<string>();
  showModal: boolean = false;

  songsDuration: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalMinutes();
  }

  totalMinutes(): void {
    this.playlist.songs.forEach((song: Song) => {
      this.songsDuration += song.duration;
    });
  }

  deletePlaylistHandler(name: string): void {
    this.deletePlaylist.emit(name);
  }

  editPlaylistHandler(showModal: boolean) {
    this.showModal = showModal;
  }
}
