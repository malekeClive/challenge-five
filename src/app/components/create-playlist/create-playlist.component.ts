import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Playlist } from 'src/app/models/playlist';
import { Song } from 'src/app/models/song';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.scss']
})
export class CreatePlaylistComponent implements OnInit {
  @Input() showModal: boolean = false;
  @Output() closeModal = new EventEmitter<boolean>();
  playlistForm!: FormGroup;
  songList: Song[] = [];

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistForm = this.fb.group({
      playlistName: ['', {validators: [Validators.required]}],
      descriptionName: ['', {validators: [Validators.required]}],
    });

    this.newSongHandler();
  }

  newSongHandler(): void {
    const emptySong: Song = new Song('', '', 0);
    this.songList.push(emptySong);
  }

  onEditSongHandler(data: any): void {
    this.songList[data.idx] = data.song;
  }

  deleteSongHandler(idx: number): void {
    this.songList = this.songList.filter((_, i) => idx != i);
  }

  submitHandler(): void {
    const songsDuration: number = this.playlistService.totalSongsInMinutes(this.songList);
    const playlist: Playlist = new Playlist(this.playlistForm.value.playlistName, songsDuration, this.songList.length, this.playlistForm.value.descriptionName, this.songList);

    this.playlistService.addNewPlaylist(playlist);
    this.modalHandler();
    this.songList = [];
    this.newSongHandler();
  }

  modalHandler(): void {
    this.closeModal.emit(false);
    this.songList = [];
    this.newSongHandler();
  }

  trackByFn(index: any) {
    return index;
  }

}
