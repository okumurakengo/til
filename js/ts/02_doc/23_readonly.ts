interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
console.log(p1)

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
console.log(a)
