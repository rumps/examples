'use strict'

domready = require 'domready'
operations = require './operations'

domready ->
  operand1El = document.getElementById('operand-1')
  operand2El = document.getElementById('operand-2')
  operationEl = document.getElementById('operation')
  resultEl = document.getElementById('result')

  # Set up operations list
  Object.keys(operations).forEach (operation) ->
    element = document.createElement('option')
    element.textContent = element.value = operation
    operationEl.appendChild(element)

  # Command handler
  execute = ->
    operand1 = parseInt operand1El.value, 10
    operand2 = parseInt operand2El.value, 10
    resultEl.textContent = operations[operationEl.value](operand1, operand2)

  # Set up command listening
  [operand1El, operand2El, operationEl].forEach (el) ->
    el.addEventListener('input', execute)

  # Process command once
  execute()
