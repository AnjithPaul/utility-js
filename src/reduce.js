const head = require('./head');
const tail = require('./tail')

const reduce = (arr,fun,h) => {

    _h = head(arr);

    if(_h == undefined)
        return h;

    if(h == undefined)
        h = '';
    
    return reduce(tail(arr), fun, fun(h, _h));
    
}
module.exports = reduce;
