'use strict';

var assert = require('assert');
var operations = require('operations');

describe('operations', function() {
  it('has four properties', function() {
    assert(Object.keys(operations).length === 4);
  });

  it('has four correctly named properties', function() {
    assert(typeof operations.add === 'function');
    assert(typeof operations.sub === 'function');
    assert(typeof operations.mult === 'function');
    assert(typeof operations.div === 'function');
  });
});
