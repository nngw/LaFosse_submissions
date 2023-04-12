//Implement a sort function without using Array.prototype.sort()

const trainers = ["Ree", "romeo", "emile", "sergi"];

const sortedNames = arr =>{
    let newArray = []

    arr.forEach(function (e){
        newArray.push(e.toLowerCase());
    })
    
    for(let i = 0; i < newArray.length; i++){
        for(let j = 0; j < newArray.length; j++){
            if(newArray[j] > newArray[j+1]){
                let temp = newArray[j];
                newArray[j] = newArray[j+1];
                newArray[j+1] = temp;
            }
        }
    }

    for(let i = 0; i < newArray.length; i++){
        for(let j = 0; j < newArray.length; j++){
            if(newArray[i].toLowerCase()===arr[j].toLowerCase()){
                newArray[i] = arr[j]
            }
        }

    }

    return newArray
}

console.log(sortedNames(trainers))

