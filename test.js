var test = require('tape');
var preprocessorify = require('./');
var path = require('path');
var fs = require('fs');

test('Spec', function(t) {
    t.equal(typeof preprocessorify, 'function', 'preprocessorify should be a function');
    var file = path.join(__dirname, 'example.js');
    var stream = preprocessorify(file);
    t.equal(typeof stream, 'object', 'preprocessorify should return object');
    t.end();
});

test('Example', function(t) {
    var file = path.join(__dirname, 'example.js');
    var src = fs.readFileSync(file, 'utf8');
    var stream = preprocessorify(file);

    stream.write(src);
    stream.end();

    var out = '';

    stream.on('data', function(o) {
        out += o;
    });

    stream.on('end', function() {
        t.ok(/hello world/.test(out), 'Output should contain "hello world"');
        t.notOk(/preprocessorify/.test(out), 'Transform should have replaced static preprocessorify module');

        t.end();
    });
});
