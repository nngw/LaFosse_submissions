//Implement evens using Array.prototype.filter()

const filterEvenNumber = arr => {
    
    filteredArray = arr.filter(e => e%2 ===0)

    return filteredArray
}

console.log(filterEvenNumber([1, 2, 3, 45, 79, 8]))