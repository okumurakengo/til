interface Animal {
}

class Rhino implements Animal {}
class Elephant implements Animal {}
class Snake implements Animal {}

function createZoo(): Animal[] {
    return [new Rhino(), new Elephant(), new Snake()];
}

console.log(createZoo())
