'use strict';

var div = require('operations/div');
var expect = require('expect.js');

describe('div operation', function() {
  it('can div', function() {
    expect(div(1, 1)).to.be(1);
    expect(div(2, 2)).to.be(1);
    expect(div(3, 5)).to.be(0.6);
  });
});
