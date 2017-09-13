"use strict";

const french = require('./french');
const spanish = require('./spanish');
const italian = require('./italian');
const english = require('./english');

const greetingGenerator = {
	french, spanish, italian, english
};

module.exports = greetingGenerator;