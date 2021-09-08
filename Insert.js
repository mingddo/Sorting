function InsertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let pivot = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > pivot) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = pivot
    }
    return arr
}

console.log(InsertSort([30, 4, 27, 11, 70, 1, 24]))

