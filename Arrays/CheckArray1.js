function is_array(input) {
    return Array.isArray(input);
}

console.log(is_array('w3resource')); // false
console.log(is_array([1, 2, 4, 0])); // true
