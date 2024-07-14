function longestSubstringWithoutRepeating(str) {
    let longestSubstr = '';
    let currentSubstr = '';
    for (let char of str) {
        let charIndex = currentSubstr.indexOf(char);
        if (charIndex !== -1) {
            currentSubstr = currentSubstr.slice(charIndex + 1);
        }
        currentSubstr += char;
        if (currentSubstr.length > longestSubstr.length) {
            longestSubstr = currentSubstr;
        }
    }
    return longestSubstr;
}
let inputString = "abcabcbb";
console.log(longestSubstringWithoutRepeating(inputString)); 
