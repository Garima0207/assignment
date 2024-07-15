function myFunction() {
    console.log('Hello World!');
}
let anotherFunction = function() {
    console.log('Goodbye!');
};
console.log(myFunction.name); 
console.log(anotherFunction.name); 
let anonymousFunction = function() {
    console.log('I am anonymous!');
};

console.log(anonymousFunction.name);
