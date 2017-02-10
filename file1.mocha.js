console.log("file1.mocha.js\\");


var assert = require("assert");

//first test, [GOOD]
describe("first", function() {
	it("test 1", function() {
		assert.ok(true);
	});
	it("test 2", function() {
		assert.ok(true);
	});
});

//make it through the last test, [GOOD]
describe("through last", function() {
	it("test 3", function(done) {//done is optional with mocha
		assert.ok(true);
		done();
	});
	it("test 4", function(done) {
		assert.ok(true);
		done();
	});
});





console.log("file1.mocha.js/");