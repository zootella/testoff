console.log("file\\");

var test = require("tape");
var tap_spec = require("tap-spec");
var tap_json = require("tap-json");
var stream_buffers = require("stream-buffers");

//run these like "$ node popquiz.js 1" and so on
var n = process.argv[2];

// (1) send the raw tap to the terminal, works
if (n == "1") test.createStream().pipe(process.stdout);

// (2) convert the raw tap into mocha-style spec, then send that to the terminal, also works
if (n == "2") test.createStream().pipe(tap_spec()).pipe(process.stdout);

// (3) use tap-json instead of tap-spec, doesn't work
if (n == "3") test.createStream().pipe(tap_json()).pipe(process.stdout);

// (4) try tap-json in object mode, doesn't work
if (n == "4") test.createStream().pipe(tap_json({ objectMode: true })).pipe(process.stdout);

//     starting back from (2) tap-spec, which makes it to the terminal
// (5) try to pipe results to w here in node, instead of the terminal, doesn't work
if (n == "5") {

	var w = new stream_buffers.WritableStreamBuffer();
	w.on("data", function() {
		console.log("got some data");
	});
	w.on("finish", function() {
		console.log("got finish");
	});
	test.createStream().pipe(tap_spec()).pipe(w);
}

//here are the unit tests
test("first", function(t) {
	t.ok(true);
	t.ok(true);
	t.end();
});
test("through last", function(t) {
	t.ok(true);
	t.end();
});

console.log("file/");