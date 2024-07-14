function computePower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
let b=2;
let n=2;

if (!isNaN(b) && !isNaN(n)) {
    let power = computePower(b, n);
    console.log(`${b} raised to the power of ${n} is ${power}`);
} else {
    console.log("Invalid input. Please enter valid numbers.");
}