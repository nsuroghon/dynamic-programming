const gridTraveler = (a,b) => {
    if(a === 1 & b === 1) return 1;
    if(a <= 0 || b <= 0) return 0;

    return gridTraveler(a - 1, b) + gridTraveler(a, b - 1)
}

// console.log(gridTraveler(2,3))
// console.log(gridTraveler(3,3))

const gridTravelerMemo = (a,b, memo = {}) => {
    const key = a + ',' + b
    if(key in memo) return memo[key];
    if(a === 1 && b === 1) return 1;
    if(a <= 0 || b <= 0) return 0;

    memo[key] = gridTraveler(a - 1, b, memo) + gridTraveler(a, b - 1, memo);
    return memo[key];
}

// console.log(gridTravelerMemo(2,3))
// console.log(gridTravelerMemo(18,18))
console.log(gridTravelerMemo(2,3))
console.log(gridTravelerMemo(3,3))
console.log(gridTravelerMemo(18,18))

