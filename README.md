#testoff

##1 compare

a cage match of popular node test frameworks, including:

* [mocha](https://www.npmjs.com/package/mocha) and chai (4,860,519 downloads in the last month)
* [tape](https://www.npmjs.com/package/tape) and tap (993,427 downloads in the last month)
* [nodeunit](https://www.npmjs.com/package/nodeunit) (163,529 downloads in the last month)

a gauntlet of challenges for each to face, including:

basic, file1
* test ok
* second test in a file
* more tests in another file

advanced, file2
* log within a test
* accidentally cover over a test
* ok false
* explicit fail
* throw an exception
* should throw an exception
* forget to call done

asynchronous, file2
* finish in the next cycle
* forget to finish in the next cycle
* ok false in the next cycle
* throw in the next cycle

always, file2
* make it to the last test

long-running, file3
* steps that take seconds
* same thing afterwards

and a wacky set of environments and goals, nicknamed:

* standard command line runner
* nicer looking output
* pop quiz, with hashtags

some fun commands to run:

	$ mocha *.mocha.js
	$ mocha *.mocha.js -R nyan

	$ tape *.tape.js
	$ tape *.tape.js | tap-spec
	$ tape *.tape.js | tap-dot
	$ tape *.tape.js | faucet
	$ tape *.tape.js | tap-json
	$ tape *.tape.js | tap-nyan

	$ nodeunit *.nodeunit.js

##2 uncaught

trying out
[uncaughtException](https://nodejs.org/api/process.html#process_event_uncaughtexception) and
[unhandledRejection](https://nodejs.org/api/process.html#process_event_unhandledrejection)

##3 pop quiz

building on tape to make the perfect system







