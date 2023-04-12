//Implement an upcase function using Array.prototype.forEach()



const upCaseLetter = arr => {
    let newArray = []

    arr.forEach(function (e){
        newArray.push(e.toUpperCase())
    })

    return newArray
}

console.log(upCaseLetter(["a", "b", "c", "d"]))
