'use strict';

import SpotifyMusicApi from '../../../../Http/Spotify/SpotifyMusicApi'

// Injections
SpotifyMusicApi.$inject = ['$http'];

export default [
  {
    name: 'MusicApi',
    service: SpotifyMusicApi
  }
];
