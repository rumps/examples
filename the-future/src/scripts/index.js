import domready from 'domready';
import operations from './operations';

domready(() => {
  const operand1El = document.getElementById('operand-1');
  const operand2El = document.getElementById('operand-2');
  const operationEl = document.getElementById('operation');
  const resultEl = document.getElementById('result');

  // Set up operations list
  Object.keys(operations).forEach(operation => {
    const element = document.createElement('option');
    element.textContent = element.value = operation;
    operationEl.appendChild(element);
  });

  // Set up command listening
  [operand1El, operand2El, operationEl].forEach(el => {
    el.addEventListener('input', execute);
  });

  // Process command once
  execute();

  // Command handler
  function execute() {
    const operand1 = parseInt(operand1El.value, 10);
    const operand2 = parseInt(operand2El.value, 10);
    resultEl.textContent = operations[operationEl.value](operand1, operand2);
  }
});
