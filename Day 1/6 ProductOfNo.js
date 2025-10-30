// 5. Product of numbers upto N
// input:- 5
// output:- 1 4 9 16 25

function product(n){
    let p = 0
    for(let i = 1; i <= n; i++){
        p = i*i
        console.log(`${p} is the product of ${i}`);
    }
}

product(5)

console.log('\n');


//using recursion
console.log(`using recursion`);
const rProduct = n => {
    let p = 0
    if(n === 1){
        return console.log(`${p} is the product of ${n}`);
        
    }
    else{
        p = n*n
        console.log(`${p} is the product of ${n}`);
        
        return rProduct(n-1)
    }
}

rProduct(5)