function extractUniqueCharacters(str) {
    let uniqueChars = new Set();
    for (let char of str) {
        uniqueChars.add(char);
    }
    return uniqueChars;
}
let inputString = "thequickbrownfoxjumpsoverthelazydog";
let uniqueCharacters = extractUniqueCharacters(inputString);
let uniqueArray = Array.from(uniqueCharacters);
console.log(`Unique characters: ${uniqueArray.join('')}`); 
