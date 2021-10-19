
class Song {
  constructor(id,name, artist, album, lyrics, namekey) {
    this.id = id
    this.name = name;
    this.artist = artist;
    this.album = album;
    this.lyrics = lyrics;
    this.namekey = namekey;
  }
}

module.exports.Song = Song;
