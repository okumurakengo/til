enum ShapeKind {
    Circle,
    Square,
}
console.log(ShapeKind)

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    kind: ShapeKind.Circle, // Error! Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    radius: 100,
}
console.log(c)

