function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let data = [6, 4, 0, 3, -2, 1];
console.log("Original data:", data);
console.log("Sorted data:", bubbleSort(data)); // Output: Sorted data: [-2, 0, 1, 3, 4, 6]