interface Dictionary<T> {
    [key: string]: T;
}

let keys: keyof Dictionary<boolean>; // string | number
let value: Dictionary<number>['foo']; // number

let foo: Dictionary<boolean>;
let bar: keyof Dictionary<boolean>;

interface Foo {
    [key: string]: boolean;
}
let baz: keyof Foo;
