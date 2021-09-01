function CountingSort (arr){
    const max = Math.max(...arr);
    const count = new Array(max+1).fill(0);
    const result = [];
    arr.forEach(val => {
        count[val]++
    })
    for(let i =0; i<max; i++){
        count[i+1] += count[i];
    };
    console.log(count)
    arr.forEach(val => {
        result[count[val]-1] = val;
        count[val]--;
    })
    return result

}

const res = CountingSort([1, 3, 2, 4, 11, 2, 6, 4, 11, 1, 7])
console.log(res)