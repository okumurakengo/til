interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // OK, because y matches structure of x

interface NotEmpty<T> {
    data: T;
}
let x2: NotEmpty<number>;
let y2: NotEmpty<string>;

// x2 = y2;  // Error, because x and y are not compatible
