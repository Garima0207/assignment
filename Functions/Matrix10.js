let arr = [];
let rows = 4;
let columns = 3;

// creating two-dimensional array
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);