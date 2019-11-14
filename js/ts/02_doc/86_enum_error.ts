function getSomeValue() {
    return 2;
}

// enum E {
//     A = getSomeValue(),
//     B, // Error! Enum member must have initializer.
// }

enum E {
    B,
    A = getSomeValue(),
}

console.log(E)
