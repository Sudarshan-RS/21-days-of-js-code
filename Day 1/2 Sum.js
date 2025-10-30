// Sum of the N natural numbers
// input:- 5
// output:- 15

const sum = n =>{
    let s = 0;
    for(let i = 0; i <= n; i++){
        s += i;
    }
    return console.log(`Using loop ${s}`);
    
}

sum(5)


//by recursion
let rS = 0
const rSum = n => {
    if(n===0){
        return console.log(`Using recursion ${rS}`)
    }
    else{
        rS += n
        return rSum(n-1)
    }
}

rSum(5);
