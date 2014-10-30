'use strict'

expect = require 'expect.js'
operations = require 'operations'

describe 'operations', ->

  it 'has four properties', ->
    expect(Object.keys(operations).length).to.be(4)

  it 'has correctly named properties', ->
    expect(operations.add).to.be.a('function')
    expect(operations.sub).to.be.a('function')
    expect(operations.mult).to.be.a('function')
    expect(operations.div).to.be.a('function')
