"use strict";

var colors = require('colors');
var fs = require('fs');
//var path = require('path');
//var _ = require('underscore');

var postfixConnector = "-";
var postfix = process.argv[2];


var filePath = __dirname + "/abc.txt";
console.log("filePath:"+filePath);

var fs = require("fs");
fs.open(filePath, "wx", function (err, fd) {
	if(err){
		if(err.CODE){
			console.log(err);
		}
	}else{
		console.log("file successfully created");
		fs.close(fd, function (err, res) {
			if(err)
			console.log(err);
		});
	}
});