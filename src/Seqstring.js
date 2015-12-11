'use strict';

class Seqstring {

  /**
   * Construct the sequential string generator.
   * 
   * @param  {Number} minLength   Minimum length of string
   * @param  {Number} maxLength   Maximum length of string
   * @param  {Object} characters  Array of characters to use to generate strings
   * @return {Object}             Return ES6 generator
   */

  constructor(minLength, maxLength, characters) {
    this.minLength = minLength || 1;
    this.maxLength = maxLength || 1e2;
    this.characters = characters || 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    return Seqstring.generator(this.minLength, this.maxLength, this.characters);
  }

  /**
   * Generate a string with given characters.
   * 
   * @param  {Number} num        
   * @param  {Object} characters  Array of characters to use to generate strings
   * @return {String}             Return generated string
   */

  static generateString(index, characters) {
    var string = '';
    var modulo = 0;

    while (index > -1) {
      modulo = index % characters.length;
      string = characters[modulo] + string;
      index = ((index - modulo) / characters.length) - 1;
    }

    return string;
  }

  /**
   * Create generator function.
   * 
   * @param  {Number} minLength   Minimum length of string
   * @param  {Number} maxLength   Maximum length of string
   * @param  {Object} characters  Array of characters to use to generate strings
   */

  static * generator(minLength, maxLength, characters) {
    var min = Seqstring.getIndexOffset(characters.length, minLength);
    var max = Seqstring.getIndexOffset(characters.length, maxLength);

    var index = min - 1;

    while (index > -1) {
      if(max === index) {
        break;
      }
      var string = Seqstring.generateString(index, characters);
      yield string;
      index++;
    }
  }

  /**
   * Used to calculate index for minimum/maximum string length.
   * 
   * @param  {Number} characterCount 
   * @param  {Number} offset         
   * @return {Number}                
   */

  static getIndexOffset(characterCount, offset) {
    var indexOffset = 0;
    for (var i = 0; i < offset; i++) {
      indexOffset += Math.pow(characterCount, i);
    }
    return indexOffset;
  }

}

module.exports = Seqstring;
