import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Song } from 'src/app/models/song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  @Input() song!: Song;
  @Input() length!: number;
  @Input() idx!: number;
  @Input() first!: boolean;
  @Input() last!: boolean;
  @Output() storeSong = new EventEmitter<any>();
  @Output() newSong = new EventEmitter();
  @Output() deleteSong = new EventEmitter<number>();
  songForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.songForm = this.fb.group({
      title: [this.song ? this.song.title : '', {validators: [Validators.required]}],
      artist: [this.song ? this.song.artist : '', {validators: [Validators.required]}],
      duration: [this.song ? this.song.duration : '', {validators: [Validators.required]}],
    })

    this.songForm.valueChanges.subscribe(value => {
      this.getSong(value);
    })
  }

  getSong(song: Song) {
    this.storeSong.emit({ song: song, idx: this.idx });
  }

  addSong(): void {
    this.newSong.emit();
  }

  removeSong(): void {
    this.deleteSong.emit(this.idx);
    console.log(this.songForm.value);
  }
}
