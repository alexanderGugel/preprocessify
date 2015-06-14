[![Build Status](https://travis-ci.org/alexanderGugel/preprocessorify.svg)](https://travis-ci.org/alexanderGugel/preprocessorify)

# preprocessorify

Conditional compilation for browserify.

## Usage

Install the package via npm:

```
npm i preprocessorify
```

Add it as a [browserify](https://github.com/substack/node-browserify) transform (also works with [watchify](https://github.com/substack/watchify)):

```
browserify -t preprocessorify example/index.js
```

Write your code (See `example.js`):

```javascript
var preprocessorify = require('preprocessorify');

preprocessorify(function() {
    // Execute some preprocessing step here
    return 'console.log(\'hello world\')';
});
```

## Why

Conditional compilation is nice. E.g. sometimes you just want to do something like....

```c
#if VERBOSE >= 2
  print("Hello World!");
#endif
```

... but in javascript.
