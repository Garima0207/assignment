var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 12
};
function listProperties(obj) {
    return Object.values(obj).join(',');
}
console.log(listProperties(student)); 