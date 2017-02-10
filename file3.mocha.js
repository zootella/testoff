console.log("file3.mocha.js\\");



var assert = require("assert");

var interval = 100;//100 works, 1000 goes over the 2s limit and fails

//first test, [NEEDS IMPROVEMENT] fails because goes over the 2 second limit
it("first", function(done) {
	assert(true);
	done();
});

//steps that take seconds, [NEEDS IMPROVEMENT]
it("steps", function(done) {
	console.log("test 1 top");
	assert(true);

	function f1() {
		console.log("test 1, step 1");
		assert(true);
		setTimeout(f2, interval);
	}
	function f2() {
		console.log("test 1, step 2");
		assert(true);
		setTimeout(f3, interval);
	}
	function f3() {
		console.log("test 1, step 3");
		assert(true);
		setTimeout(f4, interval);
	}
	function f4() {
		console.log("test 1, step 4");
		assert(true);
		done();
	}
	f1();

	assert(true);
	console.log("test 1 bottom");
});

//same thing afterwards, [NEEDS IMPROVEMENT]
it("steps afterwards", function(done) {
	console.log("test 2 top");
	assert(true);

	function f1() {
		console.log("test 2, step 1");
		assert(true);
		setTimeout(f2, interval);
	}
	function f2() {
		console.log("test 2, step 2");
		assert(true);
		setTimeout(f3, interval);
	}
	function f3() {
		console.log("test 2, step 3");
		assert(true);
		setTimeout(f4, interval);
	}
	function f4() {
		console.log("test 2, step 4");
		assert(true);
		done();
	}
	f1();

	assert(true);
	console.log("test 1 bottom");
});

//make it through the last test, [NEEDS IMPROVEMENT]
it("through last", function(done) {
	assert(true);
	done();
});





console.log("file3.mocha.js/");