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
    // handle error
	if(err){
		if(err.CODE){
			console.log(err);
		}
	}else{
		fs.close(fd, function (err, res) {
			// handle error
			if(err)
			console.log(err);
		});
	}
});