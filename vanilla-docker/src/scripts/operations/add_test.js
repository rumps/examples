'use strict';

var assert = require('assert');
var add = require('./add');

describe('add operation', function() {
  it('can add', function() {
    assert(add(1, 1) === 2);
    assert(add(2, 2) === 4);
    assert(add(3, 5) === 8);
  });
});
