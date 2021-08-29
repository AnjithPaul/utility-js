const filter = (first,second) => {
    return first.filter(second);;   
}

const filterUpperCase = (x) => {
    return (x == x.toUpperCase());
}

module.exports.filter = filter;
module.exports.filterUpperCase = filterUpperCase;
