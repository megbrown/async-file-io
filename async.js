"use strict";

const { readFile } = require("fs");

const fileArg = process.argv[2];

if (fileArg) {
	readFile(fileArg, "utf8", (err, data) => {
		if (err) return console.error(err);
		process.stdout.write(data);
		console.log(data);
	});
} else {
	process.exit();
}