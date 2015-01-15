'use strict';

var assert = require('assert');
var sub = require('operations/sub');

describe('sub operation', function() {
  it('can sub', function() {
    assert(sub(1, 1) === 0);
    assert(sub(2, 2) === 0);
    assert(sub(3, 5) === -2);
  });
});
