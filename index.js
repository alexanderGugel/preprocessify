var staticModule = require('static-module');

module.exports = function (file, opts) {
    if (!/\.js$/.test(file)) return through();

    var sm = staticModule(
        { preprocessorify: preprocessorify },
        opts
    );

    function preprocessorify(fn) {
        var src = fn();
        return Array.isArray(src) ? src.join('\n') : src;
    }

    return sm;
};
