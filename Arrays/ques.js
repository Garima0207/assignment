// 14. Add items to an array and display them
var myArray = [];
function addAndDisplay(item) {
  myArray.push(item);
  console.log(myArray);
}
addAndDisplay("apple");
addAndDisplay("banana");
addAndDisplay("orange");
// 15. Remove duplicate items from an array (ignore case sensitivity)
function removeDuplicates(arr) {
  var lowerCaseArr = arr.map(function(item) {
    return item.toLowerCase();
  });
  var uniqueArr = lowerCaseArr.filter(function(item, index) {
    return lowerCaseArr.indexOf(item) === index;
  });
  return uniqueArr;
}
var colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var uniqueColors = removeDuplicates(colors);
uniqueColors.forEach(function(color, index) {
  var ordinal = index + 1;
  var suffix = (ordinal > 3 && ordinal < 21) ? 'th' : ['th', 'st', 'nd', 'rd'][ordinal % 10];
  console.log(`${ordinal}${suffix} choice is ${color.trim()}.`);
});
// 16. Find leap years in a given range of years
function findLeapYears(start, end) {
  var leapYears = [];
  for (var year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }
  return leapYears;
}
// Test
console.log(findLeapYears(2000, 2024));
// 17. Shuffle an array
function shuffleArray(arr) {
  var shuffled = arr.slice();
  for (var i = shuffled.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
// Test
var arrToShuffle = [1, 2, 3, 4, 5];
console.log(shuffleArray(arrToShuffle));
// 18. Binary search
function binarySearch(arr, target) {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// Test
var items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(items, 1)); 
console.log(binarySearch(items, 5)); 
// 19. Compute the sum of each index value from two arrays
function sumAtIndex(arr1, arr2) {
  var maxLength = Math.max(arr1.length, arr2.length);
  var result = [];
  for (var i = 0; i < maxLength; i++) {
    var sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }
  return result;
}
// Test
var array1 = [1, 0, 2, 3, 4];
var array2 = [3, 5, 6, 7, 8, 13];
console.log(sumAtIndex(array1, array2)); 
// 20. Find duplicate values in an array
function findDuplicates(arr) {
  var duplicates = arr.filter(function(item, index) {
    return arr.indexOf(item) !== index;
  });

  return [...new Set(duplicates)];
}
// Test
var arrWithDuplicates = [1, 2, 3, 4, 1, 2, 5];
console.log(findDuplicates(arrWithDuplicates));
// 21. Flatten a nested array (optionally shallow)
function flatten(arr, shallow) {
  var flattened = [];
  arr.forEach(function(item) {
    if (Array.isArray(item) && !shallow) {
      flattened.push(...flatten(item));
    } else {
      flattened.push(item);
    }
  });
  return flattened;
}
// Test
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));
// 22. Compute the union of two arrays
function union(arr1, arr2) {
  var unionSet = new Set([...arr1, ...arr2]);
  return Array.from(unionSet);
}
// Test
console.log(union([1, 2, 3], [100, 2, 1, 10])); 
function difference(arr1, arr2) {
    var setA = new Set(arr1);
    var setB = new Set(arr2);
    var diff = new Set([...setA].filter(x => !setB.has(x)));
    return Array.from(diff);
  }
  // Test
  console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
  // 24. Remove falsy values from an array
  function removeFalsyValues(arr) {
    return arr.filter(Boolean);
  }
  // Test
  var sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  console.log(removeFalsyValues(sampleArray));
  var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
  ];
  library.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  console.log(library);
  // 26. Find pair of elements whose sum equals a specific target number
  function findPairs(arr, target) {
    var pairs = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          pairs.push(`${i}, ${j}`);
        }
      }
    }
    return pairs;
  }
  // Test
  console.log(findPairs([10, 20, 10, 40, 50, 60, 70], 50));
  // 27. Retrieve the value of a given property from all elements in an array
function getProperty(arr, prop) {
    return arr.map(function(obj) {
      return obj[prop];
    });
  }
  // Test
  var sampleArray2 = [{ a: 1 }, { a: 2 }, { a: 3 }];
  console.log(getProperty(sampleArray2, 'a')); 
  // 28. Find longest common starting substring in a set of strings
  function longestCommonStartingSubstring(arr) {
    if (arr.length === 0) return '';
    var sortedArr = arr.sort();
    var firstStr = sortedArr[0];
    var lastStr = sortedArr[arr.length - 1];
    var i = 0;
    while (i < firstStr.length && firstStr.charAt(i) === lastStr.charAt(i)) {
      i++;
    }
    return firstStr.substring(0, i);
  }
  // Test
  console.log(longestCommonStartingSubstring(['go', 'google']));
 // 29. Fill an array with values on supplied bounds
function numStringRange(start, end, step) {
    var result = [];
    for (var i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
      result.push(String.fromCharCode(i));
    }
    return result;
  }
// Test
  console.log(numStringRange('a', 'z', 2));
// 30. Merge two arrays and remove duplicates
function mergeArrays(arr1, arr2) {
  var merged = [...new Set([...arr1, ...arr2])];
  return merged;
}
// Test
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(mergeArrays(array1, array2));
// 31. Remove a specific element from an array
function removeArrayElement(arr, element) {
  var index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}
// Test
console.log(removeArrayElement([2, 5, 9, 6], 5)); 
// 32. Check if an array contains a specific element
function arrayContains(arr, element) {
  return arr.includes(element);
}
// Test
console.log(arrayContains([2, 5, 9, 6], 5)); 
// 33. Empty an array while keeping the original
function emptyArray(arr) {
  arr.length = 0;
  return arr;
}
// Test
var arrToEmpty = [1, 2, 3];
console.log(emptyArray(arrToEmpty)); 
// 34. Get nth largest element from an unsorted array
function nthLargest(arr, n) {
  if (n > arr.length) return 'n is larger than array length';
  var sortedArr = arr.slice().sort(function(a, b) {
    return b - a;
  });
  return sortedArr[n - 1];
}
// Test
console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89
// 35. Get random item from an array
function getRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
// Test
var randomArray = [1, 2, 3, 4, 5];
console.log(getRandomItem(randomArray)); 
// 36. Create array with pre-filled numeric values
function arrayFilled(length, value) {
  return Array(length).fill(value);
}
// Test
console.log(arrayFilled(6, 0)); 
console.log(arrayFilled(4, 11)); 
// 37. Create array with pre-filled string values
function arrayFilledString(length, value) {
  return Array(length).fill(value);
}
// Test
console.log(arrayFilledString(3, 'default value')); 
console.log(arrayFilledString(4, 'password'));
// 38. Move an array element from one position to another
function moveArrayElement(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
  return arr;
}
// Test
console.log(moveArrayElement([10, 20, 30, 40, 50], 0, 2)); 
console.log(moveArrayElement([10, 20, 30, 40, 50], -1, -2));
// 39. Filter false, null, 0, and blank values from an array
function filterArrayValues(arr) {
  return arr.filter(function(item) {
    return Boolean(item);
  });
}
// Test
var arrayWithFalsy = [58, '', 'abcd', true, null, false, 0];
console.log(filterArrayValues(arrayWithFalsy));
// 40. Generate an array of specified length with integer numbers
function arrayRange(start, end) {
  var length = Math.abs(end - start) + 1;
  return Array.from({ length: length }, function(_, index) {
    return start + index;
  });
}
// Test
console.log(arrayRange(1, 4)); 
console.log(arrayRange(-6, 4));
// 41. Generate an array between two integers of 1 step length
function rangeBetween(start, end) {
    var step = start < end ? 1 : -1;
    var length = Math.abs(end - start) + 1;
    return Array.from({ length: length }, function(_, index) {
      return start + index * step;
    });
  }
  // Test
  console.log(rangeBetween(4, 7));
  console.log(rangeBetween(-4, 7));
  // 42. Find unique elements from two arrays
  function uniqueElements(arr1, arr2) {
    var setA = new Set(arr1);
    var setB = new Set(arr2);
    var union = new Set([...setA, ...setB]);
    return Array.from(union);
  }
  // Test
  console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10])); 
  console.log(uniqueElements([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); 
  console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10])); 