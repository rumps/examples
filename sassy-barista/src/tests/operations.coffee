'use strict'

assert = require 'assert'
operations = require 'operations'

describe 'operations', ->

  it 'has four properties', ->
    assert(Object.keys(options.length) === 4)

  it 'has correctly named properties', ->
    assert(typeof operations.add === 'function')
    assert(typeof operations.sub === 'function')
    assert(typeof operations.mult === 'function')
    assert(typeof operations.div === 'function')
