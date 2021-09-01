function quickSort (arr){
    if(arr.length < 2){
        return arr
    }
    const pivot = [arr[0]];
    const left = [];
    const right = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < pivot[0]){
            left.push(arr[i])
        }else if( arr[i]> pivot[0]){
            right.push(arr[i])
        }else{
            pivot.push(arr[i])
        }
    }
    console.log(`left: ${left}, pivot: ${pivot}, right: ${right},`)
    return quickSort(left).concat(pivot,quickSort(right))
}

console.log(quickSort([5, 3, 7, 1, 9,3,4]))