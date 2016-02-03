'use strict';

/**
 * @name Song
 * @description Song entity.
 */
class Song {

  /**
   * @param {string} name
   * @param {string} artist
   * @param {string} imageUrl
   */
  constructor(name, artist, imageUrl) {
    this._name = name;
    this._artist = artist;
    this._imageUrl = imageUrl;
  }

  /**
   * @returns {string}
   */
  name() {
    return this._name;
  }

  /**
   * @returns {string|*}
   */
  artist() {
    return this._artist;
  }

  /**
   * @returns {*}
   */
  imageUrl() {
    return this._imageUrl;
  }
}

export default Song;
