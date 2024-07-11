function myFunction(a, b) {
    let smaller = Math.min(a, b);
    let hcf = 1;
 
    for (let i = 1; i <= smaller; i++) {
        if (a % i === 0 && b % i === 0) {
            hcf = i;
        }
    }
 
    return hcf;
}
 
const num1 = 20;
const num2 = 12;
 
console.log("GCD of the giving numbers(20,12) is:", 
    myFunction(num1, num2));