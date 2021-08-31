function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr
}
arr1 = [30, 4, 27, 11, 70, 1, 24]
console.log(bubbleSort(arr1))
