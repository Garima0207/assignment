function checkPrime(num) {
    if (num === 1) {
        console.log("1 is neither prime nor composite");
        return;
    }
    
    let isPrime = true;
    
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) {
            console.log(`${num} is a prime number`);
        } else {
            console.log(`${num} is not a prime number`);
        }
    } else {
        console.log("The number is not a prime number");
    }
}

checkPrime(4);
