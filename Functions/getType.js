function getType(value) {
    const type = typeof value;
    return type;
}
console.log(getType(42));           
console.log(getType("Hello"));     
console.log(getType(true));        
console.log(getType({}));          
console.log(getType(function() {}));
console.log(getType(undefined));   
