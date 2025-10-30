// 5. Sum of all even numbers upto N
// input:- 10
// output:- 30

const sum = n => {
    let s = 0
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            s += i
        }
    }
    return console.log(`Sum of all even numbers upto N ${s}`);
    
}

sum(10)