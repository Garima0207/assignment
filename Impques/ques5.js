function calculateSupply(age, amountPerDay) {
    const maxAge = 90; 
    let yearsRemaining = maxAge - age;
    let amountNeeded = Math.ceil(yearsRemaining * 365 * amountPerDay);
    console.log(`You will need ${amountNeeded} to last you until the ripe old age of ${maxAge}.`);
}
calculateSupply(22, 2); 