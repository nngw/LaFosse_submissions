//Implement max and shortestString using Array.prototype.reduce()
let log = console.log

const maxNum = arr =>{
    return Math.max(...arr)
}

log(maxNum([1, 297, -73, 99, 10]))// === 297


//log(shortestString(['I', 'prefer', 'marshmallow', 'to', 'oreo']))// === "I"

const shortestString = word =>{
    const shortestWord = word.reduce((shortest, currentWord) =>{ 
        return shortest.length < currentWord.length ? shortest : currentWord}
    )
    return shortestWord
}

log(shortestString(['I', 'prefer', 'marshmallow', 'to', 'oreo']))