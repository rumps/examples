'use strict';

var domready = require('domready');
var operations = require('./operations');

domready(function() {
  var operand1El = document.getElementById('operand-1');
  var operand2El = document.getElementById('operand-2');
  var operationEl = document.getElementById('operation');
  var resultEl = document.getElementById('result');

  // Set up operations list
  Object.keys(operations).forEach(function(operation) {
    var element = document.createElement('option');
    element.textContent = element.value = operation;
    operationEl.appendChild(element);
  });

  // Set up command listening
  [operand1El, operand2El, operationEl].forEach(function(el) {
    el.addEventListener('input', execute);
  });

  // Process command once
  execute();

  // Command handler
  function execute() {
    var operand1 = parseInt(operand1El.value, 10);
    var operand2 = parseInt(operand2El.value, 10);
    resultEl.textContent = operations[operationEl.value](operand1, operand2);
  }
});
