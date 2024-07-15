function case_insensitive_search(str, searchStr) {
    let normalizedStr = str.toLowerCase();
    let normalizedSearchStr = searchStr.toLowerCase();

    if (normalizedStr.includes(normalizedSearchStr)) {s
        return "Matched";
    } else {
        return "Not Matched";
    }
}
console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); 
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); 
