'use strict'

assert = require 'assert'
sub = require 'operations/sub'

describe 'sub operation', ->
  it 'can sub', ->
    assert(sub(1, 1) === 0)
    assert(sub(2, 2) === 0)
    assert(sub(3, 5) === -2)
