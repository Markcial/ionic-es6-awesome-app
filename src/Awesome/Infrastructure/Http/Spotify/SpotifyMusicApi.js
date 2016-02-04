'use strict';

import MusicApi from '../../MusicApi'

/**
 * @name SpotifyMusicApi
 * @description Makes request to Spotify's music API.
 */
class SpotifyMusicApi extends MusicApi {

  constructor($http) {
    super();
    this._$http = $http;
    this._apiUrl = 'https://api.spotify.com/v1'
  }

  /**
   * @param {string} song
   * @returns {Promise}
   */
  search(song) {
    // Example: https://api.spotify.com/v1/search?q=californication&type=track
    return this._$http.get(this._apiUrl + '/search', {
      params: {
        q: song,
        type: 'track'
      }
    }).then(function(response) {
      // We return the items array!!
      return response.data.tracks.items;
    });
  }
}

export default SpotifyMusicApi;
