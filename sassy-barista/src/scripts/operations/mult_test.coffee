'use strict'

assert = require 'assert'
mult = require './mult'

describe 'mult operation', ->
  it 'can mult', ->
    assert(mult(1, 1) is 1)
    assert(mult(2, 2) is 4)
    assert(mult(3, 5) is 15)
