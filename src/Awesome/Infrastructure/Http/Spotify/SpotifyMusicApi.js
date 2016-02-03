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
    this._apiUrl = 'https://api.spotify.com/'
  }

  /**
   * @param {string} song
   * @returns {Promise}
   */
  search(song) {
    return this._$http.get(this._apiUrl + '/search', {
      params: {
        q: song,
        type: 'track'
      }
    }).then(function(response) {
      return response.data.tracks.items;
    });
  }
}

export default SpotifyMusicApi;
