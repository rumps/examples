'use strict';

var assert = require('assert');
var div = require('operations/div');

describe('div operation', function() {
  it('can div', function() {
    assert(div(1, 1) === 1);
    assert(div(2, 2) === 1);
    assert(div(3, 5) === 0.6);
  });
});
