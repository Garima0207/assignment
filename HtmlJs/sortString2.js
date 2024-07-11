function sortString(str) {
    let chars = str.split('');
    chars.sort();
    let sortedStr = chars.join('');
    return sortedStr;
}
let originalString = "hello";
let sortedString = sortString(originalString);
console.log(`Original String: ${originalString}`);
console.log(`Sorted String: ${sortedString}`); 
