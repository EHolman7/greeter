(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const outputEnglish = () => {
	return "What;s going on, homie";
};
module.exports = outputEnglish;
},{}],2:[function(require,module,exports){
"use strict";

const outputFrench = () => {
	return "Quoi de neuf, homie";
};
module.exports = outputFrench;
},{}],3:[function(require,module,exports){
"use strict";

const french = require('./french');
const spanish = require('./spanish');
const italian = require('./italian');
const english = require('./english');

const greetingGenerator = {
	french, spanish, italian
};

module.exports = greetingGenerator;
},{"./english":1,"./french":2,"./italian":4,"./spanish":6}],4:[function(require,module,exports){
"use strict";

const outputItalian = () => {
	return "Cosa sta succedendo, homie";
};
module.exports = outputItalian;
},{}],5:[function(require,module,exports){
"use strict";

const GreetingGenerator = require('./greetingGenerator');

document.getElementById('buttons').addEventListener('click', (event) =>{
	let languageSelected;
	if(event.target.id === 'buttons'){
		languageSelected = "english";
	}else{
		languageSelected = event.target.id;
	}
	console.log('selected language', languageSelected);
	document.getElementById("output").innerHTML = GreetingGenerator[languageSelected]();
});

//document.getElementById("output").innerHTML = GreetingGenerator.french();
//document.getElementById("output").innerHTML = GreetingGenerator.spanish();
//document.getElementById("output").innerHTML = GreetingGenerator.italian();
},{"./greetingGenerator":3}],6:[function(require,module,exports){
"use strict";

const outputSpanish = () => {
	return "Que esta pasando, homie";
};
module.exports = outputSpanish;
},{}]},{},[5]);
