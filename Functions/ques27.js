function longestPalindrome(str) {
    function isPalindrome(s) {
        return s === s.split('').reverse().join('');
    }
    let longestPal = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let substring = str.slice(i, j);
            if (isPalindrome(substring) && substring.length > longestPal.length) {
                longestPal = substring;
            }
        }
    }
    return longestPal;
}
let inputString = "bananas";
console.log(longestPalindrome(inputString)); 