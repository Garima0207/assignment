function repeat_string(str, count = 0) {
    if (count < 0) {
        return "Error: Count should be greater than or equal to 0.";
    }
    if (typeof str !== 'string' || count === 0) {
        return "Error in string or count.";
    }
    return str.repeat(count);
}
console.log(repeat_string('b', 4));  
console.log(repeat_string('a'));  
