function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let target = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[target]) {
                target = j
            }
        }
        [arr[i], arr[target]] = [arr[target], arr[i]]
    }
    return arr
}

console.log(selectSort([30, 4, 27, 11, 70, 1, 24]))
