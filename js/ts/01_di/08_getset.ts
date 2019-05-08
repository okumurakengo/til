class User {
    constructor(private _name: string) {
    }
    public sayHi(): void {
        console.log("hi! i am " + this._name);
    }
    get name() {
        return this._name;
    }
    set name(newValue: string) {
        this._name = newValue;
    }
}

const tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
console.log(tom.name);
tom.sayHi();

// npx tsc 08_getset.ts --outDir dist -t ES5
