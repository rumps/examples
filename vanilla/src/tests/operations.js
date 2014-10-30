'use strict';

var operations = require('operations');
var expect = require('expect.js');

describe('operations', function() {
  it('has four properties', function() {
    expect(Object.keys(operations).length).to.be(4);
  });

  it('has four correctly named properties', function() {
    expect(operations.add).to.be.a('function');
    expect(operations.sub).to.be.a('function');
    expect(operations.mult).to.be.a('function');
    expect(operations.div).to.be.a('function');
  });
});
