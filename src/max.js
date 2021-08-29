const head = require('./head');
const tail = require('./tail')

const max = (array) => {
    if(array[1] == undefined)
        return array[0];

    return bigger(head(array), max(tail(array)));
}

const bigger = (first, second) => {
    if(first > second)
        return first;
    else
        return second;

}

module.exports = max;
