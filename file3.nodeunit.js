console.log("file3.nodeunit.js\\");



//first test, [GOOD]
exports.testFirst = function(test) {
	test.ok(true);
	test.done();
}

//steps that take seconds, [GOOD]
exports.testSteps = function(test) {
	console.log("test 1 top");
	test.ok(true);

	function f1() {
		console.log("test 1, step 1");
		test.ok(true);
		setTimeout(f2, 1000);
	}
	function f2() {
		console.log("test 1, step 2");
		test.ok(true);
		setTimeout(f3, 1000);
	}
	function f3() {
		console.log("test 1, step 3");
		test.ok(true);
		setTimeout(f4, 1000);
	}
	function f4() {
		console.log("test 1, step 4");
		test.ok(true);
		test.done();
	}
	f1();

	test.ok(true);
	console.log("test 1 bottom");
}

//same thing afterwards, [GOOD]
exports.testStepsAfterwards = function(test) {
	console.log("test 2 top");
	test.ok(true);

	function f1() {
		console.log("test 2, step 1");
		test.ok(true);
		setTimeout(f2, 1000);
	}
	function f2() {
		console.log("test 2, step 2");
		test.ok(true);
		setTimeout(f3, 1000);
	}
	function f3() {
		console.log("test 2, step 3");
		test.ok(true);
		setTimeout(f4, 1000);
	}
	function f4() {
		console.log("test 2, step 4");
		test.ok(true);
		test.done();
	}
	f1();

	test.ok(true);
	console.log("test 1 bottom");
}

//make it through the last test, [GOOD]
exports.testThroughLast = function(test) {
	test.ok(true);
	test.done();
}





console.log("file3.nodeunit.js/");