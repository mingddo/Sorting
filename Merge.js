const merge = function (left, right) {
    const result = [];
    while (left.length !== 0 && right.length !== 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

const mergeSort = function (arr) {
    if (arr.length === 1) {
        return arr
    };
    const mid = Math.floor(arr.length / 2);
    const left = arr.splice(0, mid);
    const right = arr;
    return merge(mergeSort(left), mergeSort(right))

}

const res = mergeSort([4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21])
console.log(res)