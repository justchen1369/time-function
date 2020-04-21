let {performance} = require('perf_hooks')
module.exports = async (func, ...args) => {
    if(typeof func !== 'function'){
        throw new TypeError('argument func must be a function');
    }
    const perf = performance.now();
    const result = func(...args);
    return {
        time: performance.now() - perf,
        result: result
    }
}
