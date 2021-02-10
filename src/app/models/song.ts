export class Song {
  title: string;
  artist: string;
  duration: number;

  constructor(title:string, artist:string, duration:number) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
}
