// Print all even numbers from 1 to N
// input 10
// output 2 4 6 8 10

const even = n => {
    for (let i = 1; i < n+1; i++) {
        if(i%2 === 0){
            console.log(i);
        }
        
    }
}

even(10)