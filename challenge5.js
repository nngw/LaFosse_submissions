//Implement downcase using Array.prototype.map()

const downCaseLetter = arr => {
    let newArray = []

    arr.map(function (e){
        newArray.push(e.toLowerCase())
    })

    return newArray
}

console.log(downCaseLetter(["A", "B", "C", "D"]))