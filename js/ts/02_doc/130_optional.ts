class C {
    a: number;
    b?: number;
}
let c = new C();
c.a = 12;
c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
c.b = null; // error, 'null' is not assignable to 'number | undefined'

class D {
    a: number;
    b: number | undefined;
}
let d = new D();
d.a = 12;
d.a = undefined; // error, 'undefined' is not assignable to 'number'
d.b = 13;
d.b = undefined; // ok
d.b = null; // error, 'null' is not assignable to 'number | undefined'
