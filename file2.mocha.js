console.log("file2.mocha.js\\");

var assert = require("assert");
describe("everything", function() {





//first test, [GOOD]
it("first", function() {
	assert.ok(true);
});

//log within a test, [GOOD]
it("log", function() {
	assert.ok(true);
	console.log("here's a note from within test log");
});

//accidentally cover over a test, [GOOD]
it("cover", function() {
//	assert.ok(false); // <--uncomment/comment
});
it("cover", function() {
	assert.ok(true);
});

//ok false, [GOOD]
it("false", function() {
//	assert.ok(false); // <--uncomment/comment
});

//explicit fail, [GOOD]
it("fail", function() {
//	assert.fail(); // <--uncomment/comment
});

//throw an exception, [GOOD]
it("throw", function() {
	var o = {};
//	o.isUndefined.cantReadProperty; // <--uncomment/comment
	assert.ok(true);
});
//should throw an exception, [GOOD]
it("should throw", function() {
	try {
		var o = {};
		o.isUndefined.cantReadProperty; // <--uncomment/comment
		assert.fail();
	} catch (e) {
		assert.ok(e.name == "TypeError");
		assert.ok(true);
	}
});
it("should throw fancy", function() {
	assert.throws(function() {
		var o = {};
		o.isUndefined.cantReadProperty; // <--uncomment/comment
	});
});

//forget to call done, [NEEDS IMPROVEMENT] uses two second timeout, but does run the rest of the tests
it("forget done", function(done) {//forget to call it
	assert.ok(true);
	done(); // <--uncomment/comment
});
it("after forget done", function(done) {//note that done is optional in mocha
	assert.ok(true);
	done();//if you receive it, you have to call it
});

//finish in the next cycle, [GOOD]
it("next tick done", function(done) {
	assert.ok(true);
	setImmediate(function() {
		assert.ok(true);
		done();
	});
	assert.ok(true);
});

//forget to finish in the next cycle, [NEEDS IMPROVEMENT] uses two second timeout, but does run the rest of the tests
it("next tick forget done", function(done) {
	assert.ok(true);
	setImmediate(function() {
		assert.ok(true);
		done(); // <--uncomment/comment
	});
	assert.ok(true);
});

//ok false in the next cycle of the event loop, [GOOD]
it("next tick false", function(done) {
	assert.ok(true);
	setImmediate(function() {
//		assert.ok(false); // <--uncomment/comment
		done();
	});
	assert.ok(true);
});

//throw in the next cycle of the event loop, [GOOD]
it("next tick throws", function(done) {
	assert.ok(true);
	setImmediate(function() {
		var o = {};
//		o.isUndefined.cantReadProperty; // <--uncomment/comment
		done();
	});
	assert.ok(true);
});

//make it through the last test, [GOOD]
it("through last", function() {
	assert.ok(true);
});



});

console.log("file2.mocha.js/");