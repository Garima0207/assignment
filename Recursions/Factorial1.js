function Factorial(n){
    if(n==0 || n===1){
        return 1;
    }

    else {
        return n* Factorial(n-1);
    
    }
}
console.log(Factorial(5));
console.log(Factorial(0));