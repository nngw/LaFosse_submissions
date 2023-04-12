//Implement a sort function without using Array.prototype.sort()

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const sortMonth = array =>{

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[j] > array[j+1]){
                const temp = array[j]
                array[j] = array[j+1]
                array[j + 1] = temp
            } 
        }
    }

    return array
}

console.log(sortMonth(months))

