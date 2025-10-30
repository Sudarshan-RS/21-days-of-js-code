// Factorial of N
// input:- 5
// output:- 120

function fact(n) {
    let f = 1
    for(let i = 1; i <= n; i++){
        f *= i 
    }
    return console.log(`Using loop ${f}`);
    
}
fact(5)

// solve by recursion
let f = 1
const rFact = n =>{
    if(n==0){
        return console.log(`Using recursion ${f}`)
    }
    else{
        f *= n 
        return rFact(n-1)
    }
}

rFact(5);
