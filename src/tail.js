const tail = (list) => {
    return tailEnd(list, 1, []);
}

const tailEnd = (list, i, newList) => {

    element = list[i];

    if(element == undefined)
        return newList;
    
    newList.push(element);

    return tailEnd(list, i+1, newList)
}
module.exports = tail;