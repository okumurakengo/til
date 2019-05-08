class User {
    constructor(public name: string) {
        this.name = name;
    }
    public sayHi(): void {
        console.log("hi! i am " + this.name);
    }
}

const tom = new User("Tom");
console.log(tom.name);
tom.sayHi();
