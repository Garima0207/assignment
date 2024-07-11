// Function to validate whether a given value type is boolean or not
function isBoolean(value) {
    return typeof value === 'boolean';
}
// Function to validate whether a given value type is error or not
function isError(value) {
    return value instanceof Error;
}
// Function to validate whether a given value type is NaN or not
function isNaNValue(value) {
    return Number.isNaN(value);
}
// Function to validate whether a given value type is null or not
function isNull(value) {
    return value === null;
}
// Function to validate whether a given value is number or not
function isNumber(value) {
    return typeof value === 'number' && Number.isFinite(value);
}
// Function to validate whether a given value is object or not
function isObject(value) {
    return value !== null && typeof value === 'object';
}
// Function to validate whether a given value type is pure JSON object or not
function isJSONObject(value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        return false;
    }
    try {
        JSON.stringify(value);
        return true;
    } catch (error) {
        return false;
    }
}

// Function to validate whether a given value is RegExp or not
function isRegExp(value) {
    return value instanceof RegExp;
}

// Function to validate whether a given value type is char or not
function isChar(value) {
    return typeof value === 'string' && value.length === 1;
}

// Function to check whether given value types are same or not
function areSameTypes(value1, value2) {
    return typeof value1 === typeof value2;
}

// Example usage:
console.log(isBoolean(true));         
console.log(isNaNValue(NaN));        
console.log(isNull(null));           
console.log(isNumber(42));          
console.log(isObject({}));          
console.log(isJSONObject({ key: 'value' }));  
console.log(isRegExp(/pattern/));   
console.log(isChar('a'));            
console.log(areSameTypes(42, 'hello'));  
