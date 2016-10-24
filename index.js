#!/usr/bin/env node
"use strict";

console.log("global node module v1.0.1");

var fs = require('fs');
var path = require('path');

const folder = '.';
var fileNames = [];

fs.readdir(folder, (err, files) => {
	files.forEach(file => {
		console.log(file);
		fileNames.push(file.toString());
	});
	interpreterList();
})

function interpreterList(){
	console.log("files: "+fileNames);
}