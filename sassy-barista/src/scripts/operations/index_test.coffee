'use strict'

assert = require 'assert'
operations = require '.'

describe 'operations', ->

  it 'has four properties', ->
    assert(Object.keys(operations).length is 4)

  it 'has correctly named properties', ->
    assert(typeof operations.add is 'function')
    assert(typeof operations.sub is 'function')
    assert(typeof operations.mult is 'function')
    assert(typeof operations.div is 'function')
