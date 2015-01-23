'use strict'

assert = require 'assert'
sub = require './sub'

describe 'sub operation', ->
  it 'can sub', ->
    assert(sub(1, 1) is 0)
    assert(sub(2, 2) is 0)
    assert(sub(3, 5) is -2)
