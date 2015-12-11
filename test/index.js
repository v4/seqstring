'use strict';

var assert = require('chai').assert;
var Seqstring = require('../src/seqstring');

describe('Generate strings', function() {
  it('with no parameters', function() {
    var generator = new Seqstring();
    for(var string of generator) {
      assert.equal(typeof string, 'string');
      break;
    }
  });
  it('use with minimal length', function() {
    var generator = new Seqstring(3);
    for(var string of generator) {
      assert.equal(string.length, 3);
      break;
    }
  });
  it('use with maximal length', function(done) {
    var generator = new Seqstring(2, 3);
    for(var string of generator) {
      if(string.length === 3) {
        assert.equal(string.length, 3);
        done();
        break;
      }
    }
  });
  it('use custom characters', function(done) {
    var generator = new Seqstring(null, null, ['0','1']);
    for(var string of generator) {
      if(string === '0111100') {
        assert(true);
        done();
        break;
      }
    }
  });
});