const filter = (arr,fun) => {
    return filteringRec(arr, fun, 0, []);
}

const filteringRec = (arr, fun, i, newArr) => {
    element = arr[i];

    if(element == undefined)
        return newArr;
    
    if(fun(element))
        newArr.push(element);
    
    return filteringRec(arr, fun, i+1, newArr);
}

const filterUpperCase = (x) => {
    return (x == x.toUpperCase());
}

module.exports.filter = filter;
module.exports.filterUpperCase = filterUpperCase;
