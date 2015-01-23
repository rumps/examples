'use strict';

var assert = require('assert');
var mult = require('./mult');

describe('mult operation', function() {
  it('can mult', function() {
    assert(mult(1, 1) === 1);
    assert(mult(2, 2) === 4);
    assert(mult(3, 5) === 15);
  });
});
