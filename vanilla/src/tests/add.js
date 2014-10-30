'use strict';

var add = require('operations/add');
var expect = require('expect.js');

describe('add operation', function() {
  it('can add', function() {
    expect(add(1, 1)).to.be(2);
    expect(add(2, 2)).to.be(4);
    expect(add(3, 5)).to.be(8);
  });
});
