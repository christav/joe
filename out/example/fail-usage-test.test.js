// Generated by CoffeeScript 1.6.2
var assert, joe;

assert = (typeof require === "function" ? require('assert') : void 0) || this.assert;

joe = (typeof require === "function" ? require(__dirname + '/../lib/joe') : void 0) || this.joe;

joe.test('0 args', function() {});

joe.test('1 args', function(done) {
  return done();
});

joe.test('two args', function(suite, describe) {});
