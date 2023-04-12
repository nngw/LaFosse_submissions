//Implement a capitalise function

function capitaliseFirstLetter (word){
    const firstLetter =  word[0].toUpperCase()
    const remainingLetter = word.slice(1).toLowerCase()

    return firstLetter+remainingLetter
}

console.log(capitaliseFirstLetter("hEllo") === "Hello")
console.log(capitaliseFirstLetter("avGeroU") === "Avgerou")

