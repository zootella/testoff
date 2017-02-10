console.log("file1.tape.js\\");



var test = require("tape");

//first test, [GOOD]
test("first", function(t) {
	t.ok(true);
	t.end();
});

//make it through the last test, [GOOD]
test("through last", function(t) {
	t.ok(true);
	t.end();
});



console.log("file1.tape.js/");