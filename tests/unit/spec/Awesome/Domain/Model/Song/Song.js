'use strict';

import Song from '../../../../../../../src/Awesome/Domain/Model/Song/Song'

describe('Song', () => {

  let song;

  beforeEach(() => {
    song = new Song('Californication', 'RHCP', 'http://rhcp.com/pic');
  });

  it('should have a name', () => {
    expect(song.name()).toEqual('Californication');
  });

  it('should have an artist', () => {
    expect(song.artist()).toEqual('RHCP');
  });

  it('should have a pic', () => {
    expect(song.imageUrl()).toEqual('http://rhcp.com/pic');
  });
});
