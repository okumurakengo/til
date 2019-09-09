function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

console.log(add(2, 1))
console.log(myAdd(20, 10))
