import { Song } from "./song";

export class Playlist {
  name: string;
  totalDuration: number;
  totalSongs: number;
  description: string;
  songs: Song[];

  constructor(name: string, totalDuration: number, totalSongs: number, description: string, songs: Song[]) {
    this.name = name;
    this.totalDuration = totalDuration;
    this.totalSongs = totalSongs;
    this.description = description;
    this.songs = songs;
  }
}
