interface Result {
    a: number;
    b: number;
}

function getTotal(result: Result) {
    return result.a + result.b;
}

var result = {
    a: 32,
    b: 58,
    c: "hello"
}

console.log(getTotal(result))
