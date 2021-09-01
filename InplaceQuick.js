function InplaceQuickSort(arr){
    console.log(arr)
    if(arr.length < 2){
        return arr
    }
    const pivot = arr[0];
    let leftPointer = 1;
    let rightPointer = arr.length -1;
    while(leftPointer <= rightPointer){
        if(arr[leftPointer] > pivot && arr[rightPointer] < pivot){
            [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]]
            leftPointer++;
            rightPointer--;
        }
        else if(arr[rightPointer] >= pivot){
            rightPointer--;
        }
        else if(arr[leftPointer] < pivot){
            leftPointer++;
        }
    }
    [arr[0], arr[leftPointer - 1]] = [arr[leftPointer - 1], arr[0]]
    const left = arr.splice(0,leftPointer-1);
    const mid = arr.splice(0,1)
    const right = arr;
    console.log(`left: ${left}, mid: ${mid}, right:${right}`)
    return [
        ...InplaceQuickSort(left),
        ...mid,
        ...InplaceQuickSort(right)
    ];

}
const result = InplaceQuickSort([5,3,8,4,9,1,6,2,7])
console.log(result)