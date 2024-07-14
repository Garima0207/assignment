function computeFactors(number) {
    if (number <= 0 || !Number.isInteger(number)) {
        return "Invalid input. Please enter a positive integer.";
    }
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(computeFactors(12)); 
console.log(computeFactors(20)); 
console.log(computeFactors(7));  
console.log(computeFactors(0));  
console.log(computeFactors(-8)); 
