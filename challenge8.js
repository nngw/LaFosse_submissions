// Implement a third reverse function using Array.prototype.join() and String.prototype.split() (not necessarily in that order)
let log = console.log

const reverse3 = word =>{
    
    let arr = []
    
    arr = word.split('')

    let newArr = []
    
    for(let i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i])
    }
    
    const newWord = newArr.join('')
    
    return newWord
    
    
}

log(reverse3("olleh"))

// reverse3("olleh") === "hello"
// reverse3("tpircSavaJ") === "JavaScript"