function Fibonacci(number){
    if(number<=1)
        return number;
    else{
return Fibonacci(number-1) + Fibonacci(number-2);
    }
}
const number=3;
console.log(Fibonacci(number));