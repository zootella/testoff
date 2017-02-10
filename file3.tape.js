console.log("file3.tape.js\\");




var test = require("tape");

//first test, [GOOD]
test("first", function(t) {
	t.ok(true);
	t.end();
});

//steps that take seconds, [GOOD]
test("steps", function(t) {
	console.log("test 1 top");
	t.ok(true);

	function f1() {
		console.log("test 1, step 1");
		t.ok(true);
		setTimeout(f2, 1000);
	}
	function f2() {
		console.log("test 1, step 2");
		t.ok(true);
		setTimeout(f3, 1000);
	}
	function f3() {
		console.log("test 1, step 3");
		t.ok(true);
		setTimeout(f4, 1000);
	}
	function f4() {
		console.log("test 1, step 4");
		t.ok(true);
		t.end();
	}
	f1();

	t.ok(true);
	console.log("test 1 bottom");
});

//same thing afterwards, [GOOD]
test("steps afterwards", function(t) {
	console.log("test 2 top");
	t.ok(true);

	function f1() {
		console.log("test 2, step 1");
		t.ok(true);
		setTimeout(f2, 1000);
	}
	function f2() {
		console.log("test 2, step 2");
		t.ok(true);
		setTimeout(f3, 1000);
	}
	function f3() {
		console.log("test 2, step 3");
		t.ok(true);
		setTimeout(f4, 1000);
	}
	function f4() {
		console.log("test 2, step 4");
		t.ok(true);
		t.end();
	}
	f1();

	t.ok(true);
	console.log("test 1 bottom");
});

//make it through the last test, [GOOD]
test("through last", function(t) {
	t.ok(true);
	t.end();
});





console.log("file3.tape.js/");