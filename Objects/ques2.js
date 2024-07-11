var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
function deleteAndPrint(obj, prop) {
    console.log("Before deletion:", obj);
    delete obj[prop];
    console.log("After deletion:", obj);
}
deleteAndPrint(student, 'rollno');