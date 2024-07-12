//first n elements of array
function first(arr, n = 1) {
    if (n < 0) {
      return [];
    }
    return arr.slice(0, n);
  }
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));      
  console.log(first([7, 9, 0, -2], 3)); 
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));
//4. Get the last 'n' elements of an array
  function last(arr, n = 1) {
    if (n < 0) {
      return [];
    }
    return arr.slice(-n);
  }
  console.log(last([7, 9, 0, -2]));  
  console.log(last([7, 9, 0, -2], 3));
  console.log(last([7, 9, 0, -2], 6));
  //5.array to string
  var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());    
console.log(myColor.join(","));
console.log(myColor.join("+"));
//6.Insert dashes between each two even numbers in a number string
function insertDashes(num) {
  var str = num.toString();
  var result = [str[0]];
  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      result.push('-', str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join('');
}
console.log(insertDashes(24468));
// 7. Sort the items of an array
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function(a, b) {
  return a - b;
});
console.log(arr1.join(',')); // "-4,1,2,3,3,5,6,7,8"
// 8. Find the most frequent item of an array
function mostFrequent(arr) {
  var freqMap = {};
  var maxFreq = 0;
  var mostFreqItem = null;
  arr.forEach(function(item) {
    freqMap[item] = (freqMap[item] || 0) + 1;
    if (freqMap[item] > maxFreq) {
      maxFreq = freqMap[item];
      mostFreqItem = item;
    }
  });

  return `${mostFreqItem} ( ${maxFreq} times )`;
}
var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr2)); // "a ( 5 times )"
// 9. Swap the case of each character in a string
function swapCase(str) {
  return str.split('').map(function(char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}
console.log(swapCase('The Quick Brown Fox')); // "tHE qUICK bROWN fOX"
// 10. Print elements of a nested array using nested for loops
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
for (var i = 0; i < a.length; i++) {
  console.log(`row ${i}`);
  for (var j = 0; j < a[i].length; j++) {
    console.log(` ${a[i][j]}`);
  }
}
// 11. Sum of squares of a numeric vector
function sumOfSquares(arr) {
  return arr.reduce(function(sum, num) {
    return sum + num * num;
  }, 0);
}
console.log(sumOfSquares([1, 2, 3])); // 14
// 12. Sum and product of an array of integers
function sumAndProduct(arr) {
  var sum = arr.reduce(function(total, num) {
    return total + num;
  }, 0);
  var product = arr.reduce(function(total, num) {
    return total * num;
  }, 1);
  return { sum: sum, product: product };
}
console.log(sumAndProduct([1, 2, 3, 4]));