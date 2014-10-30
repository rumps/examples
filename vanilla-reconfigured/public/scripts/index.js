/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var operations = __webpack_require__(1);
	var domready = __webpack_require__(6);
	
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  add: __webpack_require__(2),
	  sub: __webpack_require__(3),
	  mult: __webpack_require__(4),
	  div: __webpack_require__(5)
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function(a, b) {
	  return a + b;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function(a, b) {
	  return a - b;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function(a, b) {
	  return a * b;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function(a, b) {
	  return a / b;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
	!function (name, definition) {
	
	  if (true) module.exports = definition()
	  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	  else this[name] = definition()
	
	}('domready', function () {
	
	  var fns = [], listener
	    , doc = document
	    , hack = doc.documentElement.doScroll
	    , domContentLoaded = 'DOMContentLoaded'
	    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
	
	
	  if (!loaded)
	  doc.addEventListener(domContentLoaded, listener = function () {
	    doc.removeEventListener(domContentLoaded, listener)
	    loaded = 1
	    while (listener = fns.shift()) listener()
	  })
	
	  return function (fn) {
	    loaded ? fn() : fns.push(fn)
	  }
	
	});


/***/ }
/******/ ])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2svYm9vdHN0cmFwIDQyZTFiYzk0ZGZhNTk3NmQyZjI0IiwiL1VzZXJzL2pwbGFjZW5jaWEvUmVwb3NpdG9yaWVzL3J1bXAtZXhhbXBsZXMvdmFuaWxsYS1yZXN0cnVjdHVyZS9zY3JpcHRzL2luZGV4LmpzIiwiL1VzZXJzL2pwbGFjZW5jaWEvUmVwb3NpdG9yaWVzL3J1bXAtZXhhbXBsZXMvdmFuaWxsYS1yZXN0cnVjdHVyZS9zY3JpcHRzL29wZXJhdGlvbnMvaW5kZXguanMiLCIvVXNlcnMvanBsYWNlbmNpYS9SZXBvc2l0b3JpZXMvcnVtcC1leGFtcGxlcy92YW5pbGxhLXJlc3RydWN0dXJlL3NjcmlwdHMvb3BlcmF0aW9ucy9hZGQuanMiLCIvVXNlcnMvanBsYWNlbmNpYS9SZXBvc2l0b3JpZXMvcnVtcC1leGFtcGxlcy92YW5pbGxhLXJlc3RydWN0dXJlL3NjcmlwdHMvb3BlcmF0aW9ucy9zdWIuanMiLCIvVXNlcnMvanBsYWNlbmNpYS9SZXBvc2l0b3JpZXMvcnVtcC1leGFtcGxlcy92YW5pbGxhLXJlc3RydWN0dXJlL3NjcmlwdHMvb3BlcmF0aW9ucy9tdWx0LmpzIiwiL1VzZXJzL2pwbGFjZW5jaWEvUmVwb3NpdG9yaWVzL3J1bXAtZXhhbXBsZXMvdmFuaWxsYS1yZXN0cnVjdHVyZS9zY3JpcHRzL29wZXJhdGlvbnMvZGl2LmpzIiwiL1VzZXJzL2pwbGFjZW5jaWEvUmVwb3NpdG9yaWVzL3J1bXAtZXhhbXBsZXMvdmFuaWxsYS1yZXN0cnVjdHVyZS9ub2RlX21vZHVsZXMvZG9tcmVhZHkvcmVhZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDaENEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNDJlMWJjOTRkZmE1OTc2ZDJmMjRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcGVyYXRpb25zID0gcmVxdWlyZSgnb3BlcmF0aW9ucycpO1xudmFyIGRvbXJlYWR5ID0gcmVxdWlyZSgnZG9tcmVhZHknKTtcblxuZG9tcmVhZHkoZnVuY3Rpb24oKSB7XG4gIHZhciBvcGVyYW5kMUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhbmQtMScpO1xuICB2YXIgb3BlcmFuZDJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVyYW5kLTInKTtcbiAgdmFyIG9wZXJhdGlvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wZXJhdGlvbicpO1xuICB2YXIgcmVzdWx0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG5cbiAgLy8gU2V0IHVwIG9wZXJhdGlvbnMgbGlzdFxuICBPYmplY3Qua2V5cyhvcGVyYXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdGlvbikge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudmFsdWUgPSBvcGVyYXRpb247XG4gICAgb3BlcmF0aW9uRWwuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuXG4gIC8vIFNldCB1cCBjb21tYW5kIGxpc3RlbmluZ1xuICBbb3BlcmFuZDFFbCwgb3BlcmFuZDJFbCwgb3BlcmF0aW9uRWxdLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV4ZWN1dGUpO1xuICB9KTtcblxuICAvLyBQcm9jZXNzIGNvbW1hbmQgb25jZVxuICBleGVjdXRlKCk7XG5cbiAgLy8gQ29tbWFuZCBoYW5kbGVyXG4gIGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgdmFyIG9wZXJhbmQxID0gcGFyc2VJbnQob3BlcmFuZDFFbC52YWx1ZSwgMTApO1xuICAgIHZhciBvcGVyYW5kMiA9IHBhcnNlSW50KG9wZXJhbmQyRWwudmFsdWUsIDEwKTtcbiAgICByZXN1bHRFbC50ZXh0Q29udGVudCA9IG9wZXJhdGlvbnNbb3BlcmF0aW9uRWwudmFsdWVdKG9wZXJhbmQxLCBvcGVyYW5kMik7XG4gIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NjcmlwdHMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGQ6IHJlcXVpcmUoJy4vYWRkJyksXG4gIHN1YjogcmVxdWlyZSgnLi9zdWInKSxcbiAgbXVsdDogcmVxdWlyZSgnLi9tdWx0JyksXG4gIGRpdjogcmVxdWlyZSgnLi9kaXYnKVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zY3JpcHRzL29wZXJhdGlvbnMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NjcmlwdHMvb3BlcmF0aW9ucy9hZGQuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NjcmlwdHMvb3BlcmF0aW9ucy9zdWIuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSAqIGI7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NjcmlwdHMvb3BlcmF0aW9ucy9tdWx0LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgLyBiO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zY3JpcHRzL29wZXJhdGlvbnMvZGl2LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gICogZG9tcmVhZHkgKGMpIER1c3RpbiBEaWF6IDIwMTQgLSBMaWNlbnNlIE1JVFxuICAqL1xuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG5cbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PSAnb2JqZWN0JykgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxuXG59KCdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgZm5zID0gW10sIGxpc3RlbmVyXG4gICAgLCBkb2MgPSBkb2N1bWVudFxuICAgICwgaGFjayA9IGRvYy5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGxcbiAgICAsIGRvbUNvbnRlbnRMb2FkZWQgPSAnRE9NQ29udGVudExvYWRlZCdcbiAgICAsIGxvYWRlZCA9IChoYWNrID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KGRvYy5yZWFkeVN0YXRlKVxuXG5cbiAgaWYgKCFsb2FkZWQpXG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKGRvbUNvbnRlbnRMb2FkZWQsIGxpc3RlbmVyKVxuICAgIGxvYWRlZCA9IDFcbiAgICB3aGlsZSAobGlzdGVuZXIgPSBmbnMuc2hpZnQoKSkgbGlzdGVuZXIoKVxuICB9KVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICBsb2FkZWQgPyBmbigpIDogZm5zLnB1c2goZm4pXG4gIH1cblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kb21yZWFkeS9yZWFkeS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6ImluZGV4LmpzIn0=