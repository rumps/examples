'use strict'

assert = require 'assert'
div = require 'operations/div'

describe 'div operation', ->
  it 'can div', ->
    assert(div(1, 1) === 1)
    assert(div(2, 2) === 1)
    assert(div(3, 5) === 0.6)
