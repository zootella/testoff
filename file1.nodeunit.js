console.log("file1.nodeunit.js\\");



//first test, [GOOD]
exports.testFirst = function(test) {
	test.ok(true);
	test.done();
}

//make it through the last test, [GOOD]
exports.testThroughLast = function(test) {
	test.ok(true);
	test.done();
}



console.log("file1.nodeunit.js/");