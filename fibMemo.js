// const fib = (n) => {
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(3))

const foo = (n) => {
    if(n <= 1) return;
    foo(n - 1);
}
console.log(foo(5))

// 5
// 4
// 3    height: 5 & only traverse 1 at a time, so Time = O(N)
// 2    Space = O(N), because the call stack 
// 1

const bar = (n) => {
    if(n <= 1 ) return;
    bar(n - 2); 
}

console.log(bar(6))

// 6 
// 4    height: 6, subtracting 2 at every iteration 
// 2    Time = O(N / 2) ==> O(N) Space = O(N), because the call stack 
// 0


const dib = (n) => {
    if (n <= 1) return;
    dib(n - 1);
    dib(n - 1);
}
// dib(5)
// Time - O(2 power N)
// Space - O(N), stack resets when we hit base case ie return

const lib = (n) => {
    if (n <= 1) return;
    dib(n - 2);
    dib(n - 2);
}

// Time - O(2 power N/2) => Time - O(2 power N) remove consta
// Space - O(N / 2) => O(N), stack resets when we hit base case ie return

const fibonacci = (n) => {
    if (n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4))
console.log(fibonacci(5))


// memo = {
    // n : return value of fib(n)
    // example: 4 : 3
// }

const fibMemo = (n, memo = {}) => {
    if(memo[n]) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log(fibMemo(5))

// fib(n-1) time complexity of 2 power n
// fib(n-2) time complexity of 2 power n
// if we run fibonacci(50) going to take terribly long