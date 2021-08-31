function selectSort(arr){
    for(let i = 0; i < arr.length; i++){
        let targetIdx = i
        for(let j = i + 1; j< arr.length; j++){
            if(arr[j] < arr[targetIdx]){
                targetIdx = j
            }
        }
        [arr[i], arr[targetIdx]]=[arr[targetIdx], arr[i]]
    }
    return arr
}
console.log(selectSort([30, 4, 27, 11, 70, 1, 24]))