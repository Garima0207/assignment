function calculateAge(birthYear, currentYear) {
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1; 
    console.log(`You are either ${age1} or ${age2}`);
}
let currentYear = new Date().getFullYear();
calculateAge(1990, currentYear); 
calculateAge(1985, currentYear); 
calculateAge(2002, currentYear); 
