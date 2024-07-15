function string_chop(str, chunkLength = 1) {
    if (chunkLength <= 0) {
        return "Chunk length must be greater than zero.";
    }
    let result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.slice(i, i + chunkLength));
    }
    return result;
}
console.log(string_chop('w3resource'));     
console.log(string_chop('w3resource', 2));  
console.log(string_chop('w3resource', 3));  
console.log(string_chop('w3resource', 4));  
