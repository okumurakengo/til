function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName]; // o[propertyName] is of type T[K]
}

type Foo = {
    bar: number,
    baz: string,
}

const foo: Foo = {
    bar: 111,
    baz: "abc",
}

console.log(getProperty(foo, "bar"))
console.log(getProperty(foo, "bar"))
console.log(getProperty(foo, "foobar"))
