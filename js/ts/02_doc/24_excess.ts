interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
function createSquare(a: SquareConfig) {
    console.log(a)
}

let mySquare = createSquare({ width: 100, opacity: 0.5 });

