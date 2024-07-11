class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(4);
    }
    calculatePerimeter() {
        return (2 * Math.PI * this.radius).toFixed(4);
    }
}
let radius = 5;
let circle = new Circle(radius);
console.log("Radius:", radius);
console.log("Area of the circle:", circle.calculateArea());
console.log("Perimeter of the circle:", circle.calculatePerimeter()); 