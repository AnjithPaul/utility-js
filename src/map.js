const map = (arr,fun) => {
    return mappingRec(arr, fun, 0, []);   
}

const mappingRec = (arr, fun, i, newArr) => {
    element = arr[i];
    
    if(element == undefined)
        return newArr
    
    newArr.push(fun(arr[i]));

    return mappingRec(arr, fun, i+1, newArr);
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
