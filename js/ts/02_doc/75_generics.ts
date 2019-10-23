interface Foo {
    <T>(arg: T): T,
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): T,} = identity;

console.log(myIdentity)
