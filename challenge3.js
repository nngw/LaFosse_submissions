//Implement 2 reverse functions using for
const reversedWordMethod1 = word =>{
    let reversedWord = ''
    
    for(i = word.length-1; i >= 0; i --){
        reversedWord = reversedWord + word[i]
    }

    return reversedWord
}


console.log(reversedWordMethod1("olleh")==="hello")
console.log(reversedWordMethod1("tpircSavaJ") === "JavaScript")


//Implement 2 reverse functions using for in
const reversedWordMethod2 = word =>{
    let reversedWord = ''
    
    for(i in word){
        reversedWord = reversedWord + word[i]
    }

    return reversedWord
}

console.log(reversedWordMethod2("olleh"))
