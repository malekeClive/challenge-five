import { Injectable } from '@angular/core';
import { Playlist } from '../models/playlist';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlists: Playlist[] = [
    {
      name: 'Kopikustik',
      totalDuration: 5,
      totalSongs: 2,
      description: 'More than a coffee, this is all of your favorite accoustic songs.',
      songs: [
        {
          title: 'Cigarettes of ours',
          artist: 'Ardhito Pramono',
          duration: 3
        },
        {
          title: 'Walking Back Home',
          artist: 'Vira Talisa',
          duration: 2
        },
      ]
    },
    {
      name: 'Anime Hits',
      totalDuration: 13,
      totalSongs: 3,
      description: 'Listen to your favorite Anime songs, all in one playlist.',
      songs: [
        {
          title: 'Renai Circulation',
          artist: 'Kana Hanazawa',
          duration: 4
        },
        {
          title: 'Platinum Disco',
          artist: 'Tsukihi Phoenix',
          duration: 4
        },
        {
          title: 'Silhouette',
          artist: 'KANA-BOON',
          duration: 5
        },
      ]
    }
  ];

  constructor() { }

  removePlaylist(name: string): void {
    this.playlists = this.playlists.filter(playlist => playlist.name != name);
  }

  totalSongsInMinutes(songs: Song[]): number {
    let minutes: number = 0;
    songs.forEach(song => minutes += song.duration);
    return minutes;
  }

  addNewPlaylist(playlist: Playlist) {
    this.playlists.push(playlist);
  }

  updateListPlaylist(playlist: Playlist, index: number) {
    this.playlists[index] = playlist;
  }
}
