console.log("file2.tape.js\\");






var test = require("tape");

//first test, [GOOD]
test("first", function(t) {
	t.ok(true);
	t.end();
});

//log within a test, [NEEDS IMPROVEMENT] log appears, but too mixed into the default tap output
test("log", function(t) {
	t.ok(true);
	console.log("here's a note from within test log");
	t.end();
});

//accidentally cover over a test, [GOOD] both still run
test("cover", function(t) {
//	t.ok(false); // <--uncomment/comment
	t.end();
});
test("cover", function(t) {
	t.ok(true);
	t.end();
});

//ok false, [GOOD]
test("false", function(t) {
	t.ok(true);
//	t.ok(false); // <--uncomment/comment
	t.end();
});

//explicit fail, [GOOD]
test("fail", function(t) {
	t.ok(true);
//	t.fail(); // <--uncomment/comment
	t.end();
});

//throw an exception, [GOOD]
test("throw", function(t) {
	t.ok(true);
	var o = {};
//	o.isUndefined.cantReadProperty; // <--uncomment/comment
	t.end();
});

//should throw an exception, [GOOD]
test("should throw", function(t) {
	try {
		var o = {};
		o.isUndefined.cantReadProperty; // <--uncomment/comment
		t.fail();
	} catch (e) {
		t.ok(e.name == "TypeError");
		t.ok(true);
	}
	t.end();
});
test("should throw fancy", function(t) {
	t.throws(function() {
		var o = {};
		o.isUndefined.cantReadProperty; // <--uncomment/comment
	});
	t.end();
});

//forget to call done, [NEEDS IMPROVEMENT] even worse than just not running, the rest run but all fail
test("forget done", function(t) {
	t.ok(true);
	t.end(); // <--uncomment/comment
});
test("after forget done", function(t) { t.ok(true); t.end(); });

//finish in the next cycle, [GOOD]
test("next tick done", function(t) {
	t.ok(true);
	setImmediate(function() {
		t.ok(true);
		t.end();
	});
	t.ok(true);
});

//forget to finish in the next cycle, [NEEDS IMPROVEMENT] works here, but the rest of the tests run and fail
test("next tick forget done", function(t) {
	t.ok(true);
	setImmediate(function() {
		t.ok(true);
		t.end(); // <--uncomment/comment
	});
	t.ok(true);
});

//ok false in the next cycle of the event loop, [GOOD]
test("next tick false", function(t) {
	t.ok(true);
	setImmediate(function() {
//		t.ok(false); // <--uncomment/comment
		t.end();
	});
	t.ok(true);
});

//throw in the next cycle of the event loop, [NEEDS IMPROVEMENT] you do see the exception, but no more tests run
test("next tick throws", function(t) {
	t.ok(true);
	setImmediate(function() {
		var o = {};
//		o.isUndefined.cantReadProperty; // <--uncomment/comment
		t.end();
	});
	t.ok(true);
});

//make it through the last test, [GOOD]
test("through last", function(t) {
	t.ok(true);
	t.end();
});




console.log("file2.tape.js/");