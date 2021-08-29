const map = (first,second) => {
    return first.map(second);;   
}

const identity = (x) => {
    return x;
}

const cube = (x) => {
    return x*x*x;
}

module.exports.map = map;
module.exports.identity = identity;
module.exports.cube = cube;
