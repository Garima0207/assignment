function greet(name, callback) {
    return callback(name);
}
function sayHello(name) {
    return `Hello, ${name}!`;
}
let message = greet('John', sayHello);
console.log(message);
