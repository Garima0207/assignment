function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === value) {
            return mid; 
        } else if (arr[mid] < value) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1; 
}
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let searchValue = 5;
console.log(binarySearch(sortedArray, searchValue)); 
