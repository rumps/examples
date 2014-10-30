'use strict'

mult = require 'operations/mult'
expect = require 'expect.js'

describe 'mult operation', ->
  it 'can mult', ->
    expect(mult(1, 1)).to.be(1)
    expect(mult(2, 2)).to.be(4)
    expect(mult(3, 5)).to.be(15)
