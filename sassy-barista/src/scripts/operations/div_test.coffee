'use strict'

assert = require 'assert'
div = require './div'

describe 'div operation', ->
  it 'can div', ->
    assert(div(1, 1) is 1)
    assert(div(2, 2) is 1)
    assert(div(3, 5) is 0.6)
