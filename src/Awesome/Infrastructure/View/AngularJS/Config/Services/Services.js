'use strict';

import SpotifyMusicApi from '../../../../Http/Spotify/SpotifyMusicApi'
import SongSearch from '../../../../../Application/Service/SongSearch'

// Injections
SpotifyMusicApi.$inject = ['$http'];
SongSearch.$inject = ['MusicApi'];

export default [
  {
    name: 'MusicApi',
    service: SpotifyMusicApi
  },
  {
    name: 'SongSearch',
    service: SongSearch
  }
];
