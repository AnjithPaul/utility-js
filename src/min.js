const head = require('./head');
const tail = require('./tail')

const min = (array) => {
    if(array[1] == undefined)
        return array[0];

    return smaller(head(array), min(tail(array)));
}

const smaller = (first, second) => {
    if(first > second)
        return second;
    else
        return first;

}

module.exports = min;
