'use strict';

import Song from '../../Domain/Model/Song/Song';

/**
 * @name SongSearch
 * @description Service that searches for awesome songs.
 */
class SongSearch  {

  constructor(MusicApi) {
    this.api = MusicApi;
  }

  /**
   * @param {string} song
   * @returns {Array}
   */
  search(song) {
    return this.api.search(song).then((items) => {
      var songs = [];
      items.forEach((item) => {
        var song = new Song(item.name, item.artists.map((artist) => artist.name).join(", "), item.album.images[0].url);
        songs.push(song);
      });

      return songs;
    });
  }
}

export default SongSearch;
