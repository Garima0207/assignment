function string_endsWith(str, suffix) {
    return str.endsWith(suffix);
}

// Test cases
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON'));
console.log(string_endsWith('JS PHP PYTHON', ' '));
