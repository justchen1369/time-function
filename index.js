let {performance} = require('perf_hooks')
module.exports = (func, ...args) => {
    if(typeof func !== 'function'){
        throw new TypeError('argument func must be a function');
    }
    let perf = performance.now();
    func(...args);
    return performance.now() - perf
}