class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
    calculateVolume() {
        const pi = Math.PI;
        let volume = pi * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4);
    }
}
let cylinder1 = new Cylinder(3, 5); 
console.log("Volume of Cylinder 1:", cylinder1.calculateVolume()); 
let cylinder2 = new Cylinder(4, 8);
console.log("Volume of Cylinder 2:", cylinder2.calculateVolume()); 