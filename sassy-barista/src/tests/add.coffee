'use strict'

add = require 'operations/add'
expect = require 'expect.js'

describe 'add operation', ->
  it 'can add', ->
    expect(add(1, 1)).to.be(2)
    expect(add(2, 2)).to.be(4)
    expect(add(3, 5)).to.be(8)
