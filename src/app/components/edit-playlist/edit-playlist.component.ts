import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Playlist } from 'src/app/models/playlist';
import { Song } from 'src/app/models/song';
import { PlaylistService } from 'src/app/services/playlist.service';

@Component({
  selector: 'app-edit-playlist',
  templateUrl: './edit-playlist.component.html',
  styleUrls: ['./edit-playlist.component.scss']
})
export class EditPlaylistComponent implements OnInit {
  @Input() playlist!: Playlist;
  @Input() idx!: number;
  @Input() showModal!: boolean;
  @Output() closeModal = new EventEmitter<boolean>();
  playlistForm!: FormGroup;
  songList: Song[] = [];

  constructor(private fb: FormBuilder, private playlistService: PlaylistService) { }

  ngOnInit(): void {
    console.log("ASddsa");
    this.playlistForm = this.fb.group({
      playlistName: [this.playlist.name, {validators: [Validators.required]}],
      descriptionName: [this.playlist.description, {validators: [Validators.required]}],
    });

    this.songList = [...this.playlist.songs];
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
    console.log(this.songList);
  }

  submitHandler(): void {
    const songsDuration: number = this.playlistService.totalSongsInMinutes(this.songList);
    const playlist: Playlist = new Playlist(this.playlistForm.value.playlistName, songsDuration, this.songList.length, this.playlistForm.value.descriptionName, this.songList);

    this.playlistService.updateListPlaylist(playlist, this.idx);
    this.playlistService.sendClickEvent();
  }

  modalHandler(): void {
    this.closeModal.emit(false);
  }

  trackByFn(index: any) {
    return index;
  }

}
