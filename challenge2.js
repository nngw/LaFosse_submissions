//Implement a swapcase function
const swapCase = function (word){
    let swapCasedWord = ""
    
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[i].toLowerCase()){
            swapCasedWord = swapCasedWord + word[i].toUpperCase()
        } else {
            swapCasedWord = swapCasedWord + word[i].toLowerCase()
        }
    }

    return swapCasedWord
} 

console.log(swapCase("JournAl") === "jOURNaL")
console.log(swapCase("lAfOSSEaCADEMY") === "LaFosseAcademy")

