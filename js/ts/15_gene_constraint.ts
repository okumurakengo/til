interface Result {
    a: number;
    b: number;
}
interface FinalResult {
    a: number;
    b: number;
    c: string;
}

class MyData<T extends Result> {
    constructor(public value: T) {}
    getArray(): T[] {
        return [this.value, this.value, this.value];
    }
}
// const v1 = new MyData<string>("hello");
// console.log(v1.getArray());
// const v2 = new MyData<number>(234);
// console.log(v2.getArray());
const v3 = new MyData<Result>({a: 32, b: 16});
console.log(v3.getArray());
const v4 = new MyData<FinalResult>({a: 32, b: 16, c: "hello"});
console.log(v4.getArray());
