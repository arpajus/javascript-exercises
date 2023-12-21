const removeFromArray = function(array, ...elementsToRemove) {
    const arrayToReturn=[];
    for(let i=0; i<array.length;i++){
        if(!elementsToRemove.includes(array[i])) arrayToReturn.push(array[i])
    }
    return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
