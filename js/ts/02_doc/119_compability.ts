let identity = function<T>(x: T): T {
    return x;
}

let reverse = function<U>(y: U): U {
    return y;
}

identity = reverse;  // OK, because (x: any) => any matches (y: any) => any
