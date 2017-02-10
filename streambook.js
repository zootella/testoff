console.log("streambook\\");




//https://github.com/substack/stream-handbook is excellent



/*

there are 5 kinds of streams
-readable (source, produces data, like a spout)
-writable (destination, consumes data, like a drain)
-transform
-duplex
-classic

spout and drain are pretty good words, except drain is also a verb
yeah, that's the analogy to use, not a stream, but a bathtub, with a spout, a drain, and a basin, the buffer of the tub
and then the floors of the building, each one has a tub
except also, we can create, destroy, and copy water. and also compress and decompress it. with that, the analogy breaks down
because it's not water, it's data
water baloons
pages of a book, each page is 1 byte, single letter on each page
hmm


source.pipe(destination)
returns another destination so you can keep going

source.pipe(intermediate).pipe(destination)

var s = source.pipe(intermediate);
s.pipe(destination);


readableStream.pipe(destination)


*/

/*
//let's make a readable stream
var Readable = require("stream").Readable;
var spout = new Readable;


var c = 97 - 1;
spout._read = function(size) {//below calls our _read when it wants some data
//	console.log("got size: ", size);//always 16384

	if (c >= "z".charCodeAt(0)) return spout.push(null);//after z, say we're done

	setTimeout(function() {
		spout.push(String.fromCharCode(++c));
	}, 100);//wait 100ms, then give it another character
}



/*
spout.push("beep ");
spout.push("boop\n");
spout.push(null);//tell whatever is downstream that we're done producing data
*/
/*
spout.pipe(process.stdout);
//notice how the stream finishes *after* this file is all done running




process.on('exit', function () {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);
*/




/*
var Writable = require('stream').Writable;
var drain = Writable();

//chunk is incoming data for us
//enc is the string encoding we're using
//next(error) is the callback that tells the consumer they can write more data, or that we have an error they should know about

drain._write = function(chunk, enc, next) {
	console.dir(chunk);
	next();
};

process.stdin.pipe(drain);//send the keyboard to this drain




*/
















console.log("streambook/");