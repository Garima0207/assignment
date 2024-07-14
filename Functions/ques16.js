function extractUniqueCharacters(str) {
    let uniqueChars = '';
    for (let char of str) {
        if (uniqueChars.indexOf(char) === -1) {
            uniqueChars += char;
        }
    }
    return uniqueChars;
}
let inputString = "thequickbrownfoxjumpsoverthelazydog";
console.log(extractUniqueCharacters(inputString)); 
