function isPerfectNumber(number) {
    if (number <= 1) {
        return false;
    }
    let sum = 1; 
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            if (i !== number / i) {
                sum += number / i;
            }
        }
    }
    return sum === number;
}
console.log(isPerfectNumber(6));    
console.log(isPerfectNumber(496));  
console.log(isPerfectNumber(8128)); 
console.log(isPerfectNumber(27));  
