interface Animal {
}

class Rhino implements Animal {}
class Elephant implements Animal {}
class Snake implements Animal {}

class Dog {}

let zoo: Animal = [new Rhino(), new Elephant(), new Snake()];
// zoo.push(new Dog)
console.log(zoo)
