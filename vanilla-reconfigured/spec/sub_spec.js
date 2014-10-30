'use strict';

var sub = require('operations/sub');
var expect = require('expect.js');

describe('sub operation', function() {
  it('can sub', function() {
    expect(sub(1, 1)).to.be(0);
    expect(sub(2, 2)).to.be(0);
    expect(sub(3, 5)).to.be(-2);
  });
});
