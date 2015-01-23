'use strict'

assert = require 'assert'
add = require './add'

describe 'add operation', ->
  it 'can add', ->
    assert(add(1, 1) is 2)
    assert(add(2, 2) is 4)
    assert(add(3, 5) is 8)
