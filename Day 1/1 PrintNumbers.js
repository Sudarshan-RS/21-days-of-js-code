// Make a function to print numbers from 1 to n
// input 5
// output 1 2 3 4 5
const fun = n => {
    for(let i=1; i<n+1; i++){
        console.log(i)
    }
}

fun(5)

console.log('\n');


// Make a function to print numbers from n to 1 without changing the loop condition of above code
// input 5
// output 5 4 3 2 1

const fun2 = n => {
    for(let i=1; i<n+1; i++){
        console.log(n+1-i)
    }
}

fun2(5)